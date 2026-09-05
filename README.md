# Shadow Edits — static site

Plain HTML/CSS/JS, no build step needed.

## Files
- `index.html` — the page
- `css/style.css` — all styles
- `js/main.js` — scroll scrubber + mobile menu

## Preview locally
Open `index.html` directly in a browser, or run a quick local server:
```
cd site
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Deploy (pick one, all free)
- **Netlify Drop**: go to https://app.netlify.com/drop and drag this whole folder in — live in seconds.
- **Vercel**: `npx vercel` from inside this folder.
- **GitHub Pages**: push this folder to a repo, then enable Pages on the repo (Settings → Pages → deploy from branch).
- **Render**: create a Static Site on Render pointed at a repo containing this folder (publish path `.`).

## Edit later
- Contact number/email/Instagram: search `contact-row` in `index.html`.
- Colors: edit the `:root` variables at the top of `css/style.css`.
- Copy: all text lives directly in `index.html`.
