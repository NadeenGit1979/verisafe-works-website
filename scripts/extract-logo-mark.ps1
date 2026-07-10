# One-off asset pipeline: crops the circular mark out of public/logo.png,
# gives it a transparent circular background and regenerates the favicons.
# Run from the repo root:  powershell -File scripts/extract-logo-mark.ps1
$ErrorActionPreference = 'Stop'

Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public static class LogoTool {
  public static string Process(string srcPath, string markPath, string icon32Path, string apple180Path) {
    using (var src = new Bitmap(srcPath)) {
      var rect = new Rectangle(0, 0, src.Width, src.Height);
      var data = src.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
      byte[] bytes = new byte[data.Stride * src.Height];
      System.Runtime.InteropServices.Marshal.Copy(data.Scan0, bytes, 0, bytes.Length);
      src.UnlockBits(data);

      // Bounding box of everything that is not near-white background.
      int minX = src.Width, minY = src.Height, maxX = -1, maxY = -1;
      for (int y = 0; y < src.Height; y++) {
        for (int x = 0; x < src.Width; x++) {
          int i = y * data.Stride + x * 4;
          if (bytes[i] < 225 || bytes[i + 1] < 225 || bytes[i + 2] < 225) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      // The circular mark is the leftmost, full-height element of the lockup,
      // so the crop is the square at the left edge of the bounding box.
      int h = maxY - minY + 1;
      var crop = new Rectangle(minX, minY, h, h);
      using (var mark = new Bitmap(h, h, PixelFormat.Format32bppArgb)) {
        using (var g = Graphics.FromImage(mark)) {
          g.DrawImage(src, new Rectangle(0, 0, h, h), crop, GraphicsUnit.Pixel);
        }
        float c = h / 2f;
        for (int y = 0; y < h; y++) {
          for (int x = 0; x < h; x++) {
            float dx = x - c + 0.5f, dy = y - c + 0.5f;
            if (Math.Sqrt(dx * dx + dy * dy) > c) mark.SetPixel(x, y, Color.FromArgb(0, 255, 255, 255));
          }
        }
        mark.Save(markPath, ImageFormat.Png);
        SaveResized(mark, icon32Path, 32);
        SaveResized(mark, apple180Path, 180);
      }
      return string.Format("bbox=({0},{1})-({2},{3}) cropSide={4}px", minX, minY, maxX, maxY, h);
    }
  }

  static void SaveResized(Bitmap src, string path, int size) {
    using (var bmp = new Bitmap(size, size, PixelFormat.Format32bppArgb)) {
      using (var g = Graphics.FromImage(bmp)) {
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
        g.SmoothingMode = SmoothingMode.AntiAlias;
        g.PixelOffsetMode = PixelOffsetMode.HighQuality;
        g.DrawImage(src, new Rectangle(0, 0, size, size));
      }
      bmp.Save(path, ImageFormat.Png);
    }
  }
}
'@

$public = Join-Path $PSScriptRoot '..\public'
$result = [LogoTool]::Process(
  (Join-Path $public 'logo.png'),
  (Join-Path $public 'logo-mark.png'),
  (Join-Path $public 'icon-32x32.png'),
  (Join-Path $public 'apple-icon.png')
)
Write-Output $result
