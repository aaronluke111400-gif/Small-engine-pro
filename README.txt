SMALL ENGINE PRO — CLEAN COMPLETE BUILD

This build removes the old service-worker/cache dependency.

The real Kohler CV730 manufacturer diagram pages and service manual are loaded
from the existing GitHub repository using their direct raw file URLs. This avoids
the previous assets/kohler_cv730 path mismatch.

Included:
- index.html
- manifest.webmanifest
- Real Kohler diagram viewer
- Zoom, drag/pan, page navigation, thumbnails
- Pinch-to-zoom on iPhone/iPad
- Interactive overlay remains available
- No sw.js required

GITHUB INSTALL:
1. Back up your current repository first if desired.
2. Replace the repository's index.html with this index.html.
3. Replace manifest.webmanifest with the included manifest.webmanifest.
4. Do NOT upload or modify sw.js. If sw.js is still in the repository, delete it.
5. Keep the existing page-58.png, page-60.png, page-62.png, page-63.png,
   page-65.png, page-66.png, page-68.png, page-75.png, page-79.png,
   page-80.png, page-85.png, and the Kohler PDF in the repository root.
6. Commit the changes and wait for GitHub Pages to deploy.

IMPORTANT:
This build deliberately uses direct raw GitHub URLs for the diagram files.
That is what makes the diagram viewer work regardless of where the images sit
inside the site folders. No additional path editing is needed.
