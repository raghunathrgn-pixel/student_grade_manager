# 🌟 Student Portfolio Website

A clean, modern, and responsive student portfolio website created with pure **HTML5**, **CSS3**, and **JavaScript**. 

---

## 📁 Project Structure

```text
assets/
│
├── index.html        # Main HTML structure (contains your name, sections, and content)
├── style.css         # Modern styling, animations, colors, and responsive layout
├── script.js         # Theme toggle (dark/light), mobile menu, and form handling
├── profile.jpg       # Your profile avatar image
└── README.md         # Step-by-step instructions (this guide)
```

---

## 🚀 How to Run the Website (Step-by-Step)

Here are **3 easy ways** to run your portfolio website. Choose whichever is easiest for you:

### Method 1: Direct Double-Click (Easiest - No Software Needed!)
1. Open File Explorer on your computer.
2. Navigate to your project folder:
   `OneDrive > Desktop > my project > assets`
3. Find the file named **`index.html`**.
4. **Double-click** on `index.html` (or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**).
5. Your portfolio will immediately open and run in your web browser! 🎉

---

### Method 2: Using VS Code "Live Server" (Recommended for Developers)
If you are using Visual Studio Code:
1. Open the folder in VS Code.
2. Click on the **Extensions** icon on the left sidebar (or press `Ctrl + Shift + X`).
3. Search for **Live Server** (by Ritwick Dey) and click **Install**.
4. Once installed, right-click on `index.html` in your file explorer.
5. Click **"Open with Live Server"** (or click "Go Live" at the bottom right corner of VS Code).
6. Your browser will automatically open at `http://127.0.0.1:5500/index.html` and auto-reload whenever you save changes!

---

### Method 3: Using Python Local Server (Command Line)
If you have Python installed on your computer:
1. Open **PowerShell** or **Command Prompt** in this folder.
2. Run this command:
   ```powershell
   python -m http.server 3000
   ```
3. Open your browser and visit:
   ```text
   http://localhost:3000
   ```
4. Press `Ctrl + C` in the terminal when you want to stop the server.

---

## 🎨 How to Customize with Your Own Details

All files are neatly commented so you can easily update the content:

### 1. Change Your Name & Bio
- Open `index.html`.
- Look for lines 87–96 inside `<section class="hero-section" id="hero">`.
- Replace `"Raghunath"` with your own name.
- Edit the description text to describe your own background and interests.

### 2. Change Your Profile Picture
- Replace the `profile.jpg` file in this folder with your own photo named `profile.jpg`.
- Or change the `src="profile.jpg"` attribute in `index.html` to your new image file name.

### 3. Update Your Skills
- Open `index.html`.
- Look for `<section class="section skills-section" id="skills">`.
- Change skill names and percentage values (e.g., `width: 90%`).

### 4. Update Your Education
- Look for `<section class="section education-section" id="education">`.
- Replace college/school names, degrees, passing years, and your CGPA/grades.

### 5. Update Your Projects
- Look for `<section class="section projects-section" id="projects">`.
- Edit the project titles, descriptions, and update the GitHub and live demo links (`href="..."`).

### 6. Update Your Contact Details
- Look for `<section class="section contact-section" id="contact">`.
- Replace the email address (`raghu@example.com`) and social media links with your own links.

---

## 🌐 How to Host Your Portfolio Online for Free (GitHub Pages)

You can share your portfolio with recruiters and friends for free using GitHub Pages:
1. Create a repository on GitHub (e.g. `portfolio`).
2. Upload these files (`index.html`, `style.css`, `script.js`, `profile.jpg`).
3. Go to **Settings > Pages** in your GitHub repository.
4. Under **Branch**, select `main` (or `master`) and click **Save**.
5. Within 1-2 minutes, GitHub will provide a live link (e.g., `https://yourusername.github.io/portfolio/`) that anyone in the world can visit!

---

## ✨ Features Included

- 🌓 **Dark & Light Mode Toggle**: Switches smoothly and saves preference in the browser.
- 📱 **100% Mobile Responsive**: Looks great on smartphones, tablets, and laptops.
- 💎 **Modern Glassmorphism UI**: High-end styling with soft glows and clean typography.
- 📋 **One-Click Email Copy**: Click to copy your email address to the clipboard.
- ⚡ **Zero External Dependencies**: Works completely offline without needing complex setups or npm packages.
