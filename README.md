# SumoPower Website

A modern, responsive website for SumoPower - Powering Your World with high-quality batteries and chargers.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-optimized layout
- 🌐 Multi-language support (English/Indonesian)
- 🛍️ Product catalog with filtering
- 📞 WhatsApp integration
- 🎥 Video background hero section

## Tech Stack

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static site and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload your project folder
4. Vercel will automatically deploy your static site

## Project Structure

```
sumopower-website/
├── index.html              # Home page
├── pages/
│   ├── products.html       # Products page
│   └── about.html          # About page
├── assets/
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── additional-styles.css
│   ├── js/
│   │   ├── products.js     # Product data
│   │   ├── home-script.js  # Home page scripts
│   │   └── products-script.js
│   ├── images/
│   │   ├── logo.png
│   │   ├── shopeelogo.png
│   │   └── ... (other brand logos)
│   └── videos/
│       └── videobg1.mp4    # Hero background video
├── package.json
├── vercel.json
└── README.md
```

## Customization

- **Colors**: Edit CSS variables in `assets/css/style.css`
- **Products**: Update product data in `assets/js/products.js`
- **Languages**: Modify translations in script files
- **Branding**: Replace logo and images in `assets/images/`

## Performance

- Optimized images and assets
- CSS and JS minification ready
- Mobile-first responsive design
- Fast loading times

## Support

For questions or support, contact:
- Email: sumopower.indo@gmail.com
- WhatsApp: (+62) 852 - 8100 - 2569

---

© 2024 SumoPower. All Rights Reserved. 