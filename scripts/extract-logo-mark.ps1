# One-off: rebuilds public/logo-mark-new.png from the govt-registered logo
# art (verisafe-logo.png, root of repo -- a clean, tightly-cropped, already-
# transparent circular mark).
#
# Keeps a flood-fill safety net: earlier source art had a house/lock icon
# that was a transparent CUTOUT, not a white fill -- it only read as "white"
# against a white page, and nearly disappeared on the dark theme (the page's
# navy bled through instead). We flood-fill from the crop's border through
# low-alpha pixels to find the true (reachable) background; any low-alpha
# pixel NOT reached that way is an enclosed cutout and gets painted solid
# white so the icon reads on any background. This is a no-op if the source
# art's icon is already a proper white fill.
#
# Run from the repo root:  powershell -File scripts/extract-logo-mark.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Join-Path $PSScriptRoot '..'
$public = Join-Path $root 'public'
$src = New-Object System.Drawing.Bitmap((Join-Path $root 'verisafe-logo.png'))
$cropSize = $src.Width

$cropped = New-Object System.Drawing.Bitmap($cropSize, $cropSize)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $cropSize, $cropSize)))
$g.Dispose()
$src.Dispose()

# --- flood fill from the border through low-alpha pixels = true background ---
$alphaThreshold = 128
$isBackground = New-Object 'bool[,]' $cropSize, $cropSize
$visited = New-Object 'bool[,]' $cropSize, $cropSize
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

for ($x = 0; $x -lt $cropSize; $x++) {
  foreach ($y in 0, ($cropSize - 1)) {
    if ($cropped.GetPixel($x, $y).A -lt $alphaThreshold -and -not $visited[$x, $y]) {
      $visited[$x, $y] = $true
      $queue.Enqueue([System.Drawing.Point]::new($x, $y))
    }
  }
}
for ($y = 0; $y -lt $cropSize; $y++) {
  foreach ($x in 0, ($cropSize - 1)) {
    if ($cropped.GetPixel($x, $y).A -lt $alphaThreshold -and -not $visited[$x, $y]) {
      $visited[$x, $y] = $true
      $queue.Enqueue([System.Drawing.Point]::new($x, $y))
    }
  }
}

while ($queue.Count -gt 0) {
  $pt = $queue.Dequeue()
  $isBackground[$pt.X, $pt.Y] = $true
  foreach ($d in @(@(1,0),@(-1,0),@(0,1),@(0,-1))) {
    $nx = $pt.X + $d[0]; $ny = $pt.Y + $d[1]
    if ($nx -ge 0 -and $nx -lt $cropSize -and $ny -ge 0 -and $ny -lt $cropSize -and -not $visited[$nx, $ny]) {
      if ($cropped.GetPixel($nx, $ny).A -lt $alphaThreshold) {
        $visited[$nx, $ny] = $true
        $queue.Enqueue([System.Drawing.Point]::new($nx, $ny))
      }
    }
  }
}

$fixedCount = 0
for ($x = 0; $x -lt $cropSize; $x++) {
  for ($y = 0; $y -lt $cropSize; $y++) {
    $p = $cropped.GetPixel($x, $y)
    if ($p.A -lt $alphaThreshold -and -not $isBackground[$x, $y]) {
      $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
      $fixedCount++
    }
  }
}
Write-Output "flood-fill fixed $fixedCount enclosed-cutout pixels"

# BrandLink renders the mark at 44px (header) / 36px (footer), and
# images.unoptimized means this file's byte size is the wire size on every
# page — it is preloaded. 128px covers ~3x DPR and costs ~17KB; a 512px
# master cost ~172KB for no visible gain. Favicons come from the master
# instead (see generate-favicons.ps1), so this can stay small.
$size = 128
$out = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g2 = [System.Drawing.Graphics]::FromImage($out)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g2.DrawImage($cropped, 0, 0, $size, $size)
$g2.Dispose()
$cropped.Dispose()

$outPath = Join-Path $public 'logo-mark-new.png'
$out.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
Write-Output "wrote $outPath (${size}x${size})"
