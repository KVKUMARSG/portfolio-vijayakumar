# GitHub Pages Deployment Guide

## Your Portfolio is Ready to Deploy! 🚀

The production build has been successfully created in the `dist` folder.

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Professional Portfolio"
   ```

2. **Create a new repository on GitHub**:
   - Go to: https://github.com/KVKUMARSG
   - Click "New Repository"
   - Name it: `portfolio-vijayakumar`
   - Make it **Public**
   - Don't initialize with README (we already have files)

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/KVKUMARSG/portfolio-vijayakumar.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings: https://github.com/KVKUMARSG/portfolio-vijayakumar/settings/pages
   - Under "Build and deployment":
     -  Source: **GitHub Actions**
   - The workflow will automatically deploy when you push

5. **Your site will be live at**:
   ```
   https://kvkumarsg.github.io/portfolio-vijayakumar/
   ```

### Option 2: Manual Deployment

1. **Install GitHub Pages CLI** (if you don't have git):
   ```bash
   npm install -g gh-pages
   ```

2. **Deploy the dist folder**:
   ```bash
   npx gh-pages -d dist
   ```

3. **Enable GitHub Pages** (same as step 4 above but select):
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / (root)

### Option 3: Upload Manually

1. Create repository on GitHub (step 2 above)
2. In repository settings, enable GitHub Pages
3. Upload the contents of the `dist` folder to a `gh-pages` branch

---

## Your Live URLs

Once deployed, your portfolio will be accessible at:
- **Main Site**: https://kvkumarsg.github.io/portfolio-vijayakumar/
- **About Page**: https://kvkumarsg.github.io/portfolio-vijayakumar/about
- **PM Showcase**: https://kvkumarsg.github.io/portfolio-vijayakumar/pm-showcase
- **And all other pages...**

## Next Steps

1. Choose one of the deployment options above
2. Follow the steps carefully
3. Wait 2-3 minutes for GitHub Pages to build
4. Visit your live URL!

## Troubleshooting

If you see a blank page:
- Make sure the repository name matches what's in `vite.config.js`
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes - deployment can take time

## Updating Your Site

To update your portfolio in the future:
1. Make changes to your code
2. Run `npm run build`
3. Git add, commit, and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
4. GitHub Actions will automatically redeploy (if using Option 1)

---

**Need help?** Let me know which deployment option you want to use!
