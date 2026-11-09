# Prayas Das — Engineering Portfolio

A responsive static portfolio for GitHub Pages.

## Files
- `index.html` — portfolio content and structure
- `style.css` — responsive visual design
- `script.js` — mobile navigation and contact links
- `CNAME` — custom domain (`prayas.me`)

## Before publishing
1. Edit `script.js` and replace `YOUR_EMAIL@example.com` with your public contact email.
2. Replace `YOUR-LINKEDIN` with your actual LinkedIn profile slug/URL.
3. Review every project, skill and education detail in `index.html`. Remove anything you cannot substantiate.
4. Add a real resume PDF only if you want one linked from the page. The current design does not invent a resume link.

## Publish
1. Sign in to the GitHub account that owns `prayasee/prayasee.github.io`.
2. Open that repository and upload the contents of this folder to the repository root (not the ZIP itself).
3. In repository Settings → Pages, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. In Settings → Pages → Custom domain, enter `prayas.me` and save. The `CNAME` file is included in this package.
5. Wait for DNS to propagate and for GitHub Pages to issue its HTTPS certificate. Then enable **Enforce HTTPS**.

## Namecheap DNS for GitHub Pages
Only change DNS after the custom domain is set in GitHub Pages. In Namecheap → Domain List → Manage → Advanced DNS, use these records if they are not already present:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | prayasee.github.io |

Remove conflicting parking/redirect records for `@` or `www` if present. Do not delete unrelated email records (MX/TXT) without checking what they are used for. DNS providers sometimes preconfigure records; inspect before adding duplicates.

## Important
This package does not configure your GitHub repository permissions or DNS automatically. GitHub Pages requires admin access to the repository to set a custom domain and publishing source.
