# GitHub Pages Deployment Guide

## Quick Setup

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push the workflow file:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

3. **The site will automatically deploy** when you push to the main branch.

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Install gh-pages (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Important Notes

- The base path is set to `/daittojex/` in `vite.config.ts`
- If your repository name is different, update the `base` path in `vite.config.ts`
- If using a custom domain, set `base: '/'` in `vite.config.ts`
- The site will be available at: `https://samuel04-png.github.io/daittojex/`

## Troubleshooting

- If images don't load, check that all assets are in the `public/` folder
- The `.nojekyll` file in `public/` prevents Jekyll processing
- Check GitHub Actions tab for deployment status

