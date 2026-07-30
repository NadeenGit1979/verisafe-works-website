# One-off asset pipeline: regenerates the favicons from the full-resolution
# brand master (verisafe-logo.png), cropped to a circle to match how BrandLink
# renders the mark (rounded-full).
#
# This reads the master rather than public/logo-mark-new.png: that file is
# deliberately downscaled to 128px for the web (it renders at 44px), which is
# smaller than the 180px apple-icon and would upscale it.
# Run from the repo root:  powershell -File scripts/generate-favicons.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

function Save-CircularIcon([System.Drawing.Bitmap]$src, [string]$path, [int]$size) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  # Fill an antialiased circle with the scaled mark as its texture, so the
  # icon edge stays smooth at small sizes.
  $scaled = New-Object System.Drawing.Bitmap($src, $size, $size)
  $brush = New-Object System.Drawing.TextureBrush($scaled)
  $g.FillEllipse($brush, 0, 0, $size, $size)
  $g.Dispose()
  $brush.Dispose()
  $scaled.Dispose()
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output "wrote $path (${size}x${size})"
}

$public = Join-Path $PSScriptRoot '..\public'
$src = New-Object System.Drawing.Bitmap((Join-Path $PSScriptRoot '..\verisafe-logo.png'))
Save-CircularIcon $src (Join-Path $public 'icon-32x32.png') 32
Save-CircularIcon $src (Join-Path $public 'apple-icon.png') 180
$src.Dispose()
