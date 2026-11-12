# Prayas Das — Portfolio (prayas.me)

Updated from the supplied portfolio HTML for GitHub Pages and the `prayasee` GitHub account.

## Files
- `index.html` — website markup
- `style.css` — original portfolio styling extracted from the HTML
- `script.js` — interactive effects and contact form mailto handler
- `assets/` — images extracted from the original HTML
- `CNAME` — custom domain `prayas.me`

## Before publishing
1. Review all academic scores, certificates, internship details, paper titles, conference dates and publication claims. These were retained from your supplied portfolio; publish only details you can verify.
2. Your current status is updated to B.Tech 3rd year / 6th semester. Review the exact semester wording and expected graduation year.
3. GitHub profile links are updated to `https://github.com/prayasee`.
4. The original contact details and CV link were retained from your supplied portfolio. Confirm you want your phone number and personal/academic email addresses publicly visible.
5. Test the contact form: it opens the visitor's email application using `mailto`; it does not send messages through a server.

## Upload to GitHub
1. Sign in to GitHub as `prayasee`.
2. Open `https://github.com/prayasee/payashxx` (the repository shown in your screenshot) or the repository you intend to publish from.
3. Download and extract this ZIP.
4. In the repository Code tab, choose Add file → Upload files. Upload `index.html`, `style.css`, `script.js`, `CNAME`, and the entire `assets` folder (including all images). Do not upload only the ZIP file.
5. Commit to the `main` branch. If GitHub asks to replace existing files, confirm only after checking that this is the correct repository.

## Enable GitHub Pages
Repository → Settings → Pages → Build and deployment:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
- Save

## Attach `prayas.me`
In Settings → Pages → Custom domain, enter `prayas.me` and save. The `CNAME` file is included at the repository root.

## Namecheap DNS
Namecheap → Domain List → Manage beside `prayas.me` → Advanced DNS. Check existing records first. For GitHub Pages apex domain, configure these A records if missing:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | prayasee.github.io |

Remove only conflicting parking/redirect records for `@` or `www`. Do not delete MX/TXT records used for email or domain verification. If Namecheap's Education setup installed different records, inspect them before changing anything.

## Final checks
- Wait for GitHub Pages deployment to finish.
- Visit `https://prayas.me` and `https://www.prayas.me`.
- In Settings → Pages, wait for certificate provisioning, then enable **Enforce HTTPS**.
- DNS and HTTPS provisioning can take time; do not repeatedly change records while propagation is in progress.
