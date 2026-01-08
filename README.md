# Mahesh T - Advanced Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring advanced GSAP animations and smooth user interactions.

## 🚀 Features

- **Advanced GSAP Animations**: Smooth, professional animations throughout the site
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, gradient-based design with interactive elements
- **Smooth Scrolling**: Enhanced navigation with GSAP-powered smooth scrolling
- **Loading Animation**: Elegant loader screen on page load
- **Interactive Elements**: Hover effects, 3D transforms, and parallax scrolling
- **Performance Optimized**: Lightweight and fast-loading

## 📋 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP 3.12.2**: Advanced animation library
  - ScrollTrigger plugin
  - TextPlugin

## 🎨 Sections

1. **Hero Section**: Animated introduction with floating shapes and particles
2. **About**: Personal information with animated statistics
3. **Education**: Timeline-based education history with scroll animations
4. **Skills**: Interactive skill tags with hover effects
5. **Projects**: Project showcase with 3D tilt effects
6. **Certifications**: Animated certification cards
7. **Contact**: Contact information with animated icons

## 📦 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Local Setup

1. **Clone or download** this repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open the project** in your preferred code editor

3. **Run locally** using one of these methods:

   **Option 1: Using Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser

   **Option 2: Using Node.js (if installed)**
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run the server
   http-server -p 8000
   ```
   Then open `http://localhost:8000` in your browser

   **Option 3: Using VS Code Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

   **Option 4: Direct File Opening**
   - Simply double-click `index.html` to open in your default browser
   - Note: Some features may be limited when opening directly

## 🌐 Deployment

### Option 1: GitHub Pages (Free & Recommended)

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select `main` branch and `/ (root)` folder
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/portfolio`

3. **Custom Domain (Optional)**:
   - In the Pages settings, add your custom domain
   - Update DNS records as instructed by GitHub

### Option 2: Netlify (Free & Easy)

1. **Sign up** at [netlify.com](https://www.netlify.com)

2. **Deploy**:
   - Drag and drop your project folder to Netlify dashboard, OR
   - Connect your GitHub repository for continuous deployment

3. **Your site** will be live at `https://your-site-name.netlify.app`

4. **Custom Domain**:
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 3: Vercel (Free & Fast)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy

3. **Or use Vercel Dashboard**:
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Option 4: Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and Initialize**:
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**:
   ```bash
   firebase deploy
   ```

### Option 5: Traditional Web Hosting

1. **Upload files** via FTP/SFTP:
   - Upload all files (`index.html`, `styles.css`, `script.js`) to your web server's `public_html` or `www` directory
   - Ensure the file structure is maintained

2. **Access your site** at your domain

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Updating Content

- **Personal Information**: Edit `index.html` directly
- **Projects**: Add or modify project cards in the Projects section
- **Skills**: Update skill tags in the Skills section
- **Contact**: Modify contact information in the Contact section

### Adjusting Animations

Animation timings and effects can be customized in `script.js`. Look for functions like:
- `initHero()` - Hero section animations
- `initProjects()` - Project card animations
- `initSkills()` - Skills animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Animations not working?
- Ensure GSAP libraries are loading (check browser console)
- Verify internet connection (GSAP loads from CDN)
- Check browser console for JavaScript errors

### Layout issues?
- Clear browser cache
- Check if all CSS files are loading
- Verify viewport meta tag is present

### Deployment issues?
- Ensure all files are uploaded
- Check file paths are correct (case-sensitive on some servers)
- Verify `index.html` is in the root directory

## 📄 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript and GSAP animations
└── README.md          # This file
```

## 🎯 Performance Tips

1. **Optimize Images**: If you add images, compress them before uploading
2. **Minify Files**: Use minified versions for production (optional)
3. **CDN**: GSAP is already loaded from CDN for optimal performance
4. **Caching**: Enable browser caching on your hosting platform

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Mahesh T**
- Email: walrusmahesh@gmail.com
- LinkedIn: [Mahesh T](https://www.linkedin.com/in/mahesh-t-541290250)
- Phone: +91 7339091977

## 🙏 Acknowledgments

- GSAP (GreenSock) for the amazing animation library
- Font Awesome for icons
- All contributors and inspiration sources

---

**Built with ❤️ using HTML, CSS, JavaScript & GSAP**

