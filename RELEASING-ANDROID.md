# Publishing an Android build

The Android app is distributed by us, not by Google Play. Invite emails link to
`https://verisafe.works/download`, and that page's Android button points at an
APK sitting in our own Supabase storage.

**Why it works this way.** Emails used to embed the Android build link directly,
and that link was a third-party file share that expired after a couple of hours.
Every invitation already sitting in someone's inbox went dead, with no way to fix
it — the mail was already delivered. Now the only URL that ever reaches a
recipient is our own page, so the build can move as often as we like.

**The rule that keeps it working: never put a build URL in an email, an SMS or
anything else we can't edit after sending. Send `/download`.**

## Where the APK lives

| | |
| --- | --- |
| Supabase project | `twyyinrbanmejxupgqra` |
| Bucket | `app-builds` — **must be public** |
| Object path | `verisafe-works-latest.apk` (stable; every release overwrites it) |
| Public URL | `https://twyyinrbanmejxupgqra.supabase.co/storage/v1/object/public/app-builds/verisafe-works-latest.apk` |

The path never changes, so the site only needs the version number, which it
appends as `?v=…` to bust Supabase's CDN cache.

## First-time setup (once)

1. Supabase dashboard → **Storage** → **New bucket**.
2. Name it `app-builds` and turn **Public bucket** on. A private bucket only
   issues signed URLs, which expire — the exact problem this replaces.
3. On the bucket's settings, raise the **file size limit** above the APK size.
   Also check **Project settings → Storage → Upload file size limit**: the free
   plan caps every upload at 50 MB. The current release APK is ~47 MB, so a
   slightly larger build will start failing with a size error rather than an
   obvious one.

## Publishing a new build (each release)

1. Build the release APK:
   `android/gradlew.bat assembleRelease` from the app repo (see its README —
   `npm run android` is broken on this machine).
   Output: `android/app/build/outputs/apk/release/app-release.apk`.
2. Rename it to `verisafe-works-latest.apk`.
3. Supabase → Storage → `app-builds`. **Delete the existing object first** — the
   dashboard uploader refuses a duplicate name rather than replacing it.
4. Upload the renamed file. Confirm it lands as `verisafe-works-latest.apk`
   (not `verisafe-works-latest (1).apk`).
5. In `src/config/site.ts`, bump `appDownloads.androidVersion` to the new
   version. This is what makes the CDN serve the new file and what the page
   shows testers — skip it and people keep getting the previous build from an
   edge cache with no error to explain it.
6. Deploy the site.
7. Verify on a real Android phone: open `/download`, tap **Download for
   Android**, confirm the APK downloads and installs. A desktop check is not
   enough — Chrome on Android is where the file-type warning appears.

## Things that will bite

- **Bucket must stay public.** Flipping it private swaps working links for
  403s across every email already sent.
- **The `download` attribute is advisory here.** Browsers only honour a
  suggested filename same-origin, so the saved file keeps the object's name.
  Harmless — just don't rely on it to rename anything.
- **Sideloading shows two scary prompts** (Chrome's "this file type may harm
  your device", then Android's install-permission dialog). `/download` walks
  people through both; if that copy is edited, keep the warnings in it or
  installs get abandoned there.
- **iOS is unchanged** — still TestFlight (`siteConfig.appDownloads.ios`), and
  the invite for it is managed in App Store Connect, not here.
