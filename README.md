<div align="center">

# 🌿 Jekyll Essenza

**A minimal, elegant Jekyll theme for holistic wellness and personal growth**

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=flat-square&logo=jekyll&logoColor=white)](https://jekyllrb.com)
[![Ruby](https://img.shields.io/badge/Ruby-3.3-CC342D?style=flat-square&logo=ruby&logoColor=white)](https://www.ruby-lang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

*Reiki · Coaching Olistico · Consapevolezza di Sé*

---

</div>

## ✨ Features

| | Feature | Description |
|---|---|---|
| 📱 | **Responsive Design** | Tailwind CSS utilities with mobile-first approach |
| 🎨 | **Nature Palette** | Warm, organic colors — salvia, rosmarino, blu, crema |
| 📝 | **Category Blog** | Interactive filtering with toggle animations |
| 🌊 | **Smooth Animations** | Scroll-reveal, floating elements, breathe effects |
| 🍔 | **Mobile Nav** | Burger menu with backdrop blur |
| 📬 | **Contact Form** | Web3Forms-ready with spam protection |
| 🔍 | **SEO Optimized** | jekyll-seo-tag + structured metadata |
| 📡 | **RSS Feed** | Auto-generated via jekyll-feed |
| 🔤 | **Beautiful Typography** | Cormorant Garamond · Playfair Display · Inter |

## 🗂️ Project Structure

```
📦 jekyll-essenza
├── 📄 _config.yml           # Site configuration
├── 📁 _includes/
│   ├── head.html            # <head> · fonts · Tailwind CDN · SCSS
│   ├── header.html          # Navbar with mobile menu
│   └── footer.html          # Site footer
├── 📁 _layouts/
│   ├── default.html         # Base layout
│   ├── page.html            # Static pages
│   ├── post.html            # Blog posts
│   └── blog.html            # Blog listing with category cards
├── 📁 _posts/               # Blog posts (Markdown)
├── 📁 _sass/
│   ├── _variables.scss      # 🎨 Color & font tokens
│   ├── _base.scss           # Reset & base styles
│   ├── _components.scss     # Cards, navbar, reveal
│   └── _animations.scss     # Keyframes & utilities
├── 📁 assets/
│   ├── css/main.scss        # SCSS entry point
│   └── js/main.js           # Interactivity
├── 📁 pages/
│   ├── attivita.md          # 🧘 Services
│   ├── blog.md              # 📝 Blog listing
│   └── contatti.md          # 📬 Contact
├── 🐳 Dockerfile
├── ⚙️ Makefile
└── 💎 Gemfile
```

## 🚀 Quick Start

### 🐳 With Docker (recommended)

```bash
# Build and serve with live reload at http://localhost:4000
make serve

# Stop the container
make stop

# Remove image and generated files
make clean
```

### 💎 With Ruby

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

> 🌐 Site available at **http://localhost:4000**

## 📝 Creating Posts

Add Markdown files to `_posts/` with this front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-01-15
categories: benessere    # benessere | reiki | consapevolezza | crescita
emoji: 🌿               # Displayed as post thumbnail
read_time: 6             # Estimated reading time in minutes
---

Your excerpt text here.

<!--more-->

Full post content...
```

## 🎨 Customization

### 🖌️ Colors

Edit `_sass/_variables.scss` to change the color palette. Mirror changes in the Tailwind CDN config inside `_includes/head.html`.

### 📬 Contact Form

Get your free access key at [web3forms.com](https://web3forms.com), then update the hidden input in `pages/contatti.md`:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

### ⚙️ Site Settings

Edit `_config.yml` for title, description, permalink structure, and plugins.

---

<div align="center">

Made with 💚 for the wellness community

</div>
