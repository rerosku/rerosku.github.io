# 🌐 Jekyll About.me Theme

Un tema Jekyll minimalista e compatibile con GitHub Pages, ispirato al layout di about.me. Perfetto per creare il tuo spazio personale sul web con sezione profilo, skills in pillole colorate, form contatti e categorie organizzate.

## ✨ Caratteristiche

- **Homepage tipo about.me** con foto profilo, nome, bio e tagline
- **Skills in pillole colorate** con palette personalizzabile
- **4 pulsanti categoria** con emoji, colori vibranti e effetto hover
- **Form contatti statico** con Formspree (URL configurabile)
- **Card minimal** per gli ultimi articoli
- **4 categorie predefinite**: WebSmart, Awakena, Reiki, Vita Off-Grid
- **Design responsive** mobile-first
- **CSS inline** per massima portabilità
- **Nessun JavaScript** richiesto
- **Emoji come icone** (no font esterni)
- **Link social** con icone (Instagram, Bluesky, GitHub, Email)

## 🚀 Installazione rapida con JekyllEx (Android)

JekyllEx è un'app Android che ti permette di gestire siti Jekyll direttamente dal tuo smartphone.

### 1. Installa JekyllEx

Scarica JekyllEx dal [Google Play Store](https://play.google.com/store/apps/details?id=com.chenhe.jekyllex).

### 2. Connetti il tuo account GitHub

- Apri JekyllEx
- Tocca "Login with GitHub"
- Autorizza l'accesso al tuo account GitHub

### 3. Crea il sito

- Tocca l'icona "+" per creare un nuovo sito
- Seleziona "Import from GitHub"
- Incolla l'URL del repository del tema (o carica questi file manualmente)

### 4. Configura il sito

Modifica `_config.yml` con le tue informazioni:

```yaml
title: "Il Mio Spazio Web"
email: mio@email.com
description: "Benvenutǝ nel mio spazio personale sul web"
url: "https://tuousername.github.io"
```

### 5. Personalizza i dati

Modifica i file in `_data/`:

- **`_data/author.yml`**: Nome, bio, skills, social links
- **`_data/categories.yml`**: Descrizioni e colori delle categorie

### 6. Pubblica su GitHub Pages

- Vai su [GitHub.com](https://github.com) e crea un nuovo repository
- Nome: `tuousername.github.io` (sostituisci con il tuo username)
- Carica tutti i file del tema
- GitHub Pages si attiverà automaticamente!

Il tuo sito sarà disponibile all'indirizzo: `https://tuousername.github.io`

## 🛠️ Installazione da terminale (metodo classico)

### Prerequisiti

- Ruby 2.7+
- Bundler
- Git

### 1. Clona o scarica il tema

```bash
# Clona il repository (se disponibile)
git clone https://github.com/tuousername/jekyll-aboutme-theme.git
cd jekyll-aboutme-theme

# Oppure crea una nuova cartella e copia i file manualmente
mkdir mio-sito-jekyll
cd mio-sito-jekyll
```

### 2. Installa le dipendenze

```bash
bundle install
```

### 3. Configura il sito

Modifica `_config.yml` con le tue informazioni.

### 4. Sviluppo locale

```bash
# Avvia il server di sviluppo
bundle exec jekyll serve

# Il sito sarà disponibile su http://localhost:4000
```

### 5. Pubblica su GitHub

```bash
# Inizializza il repository git
git init
git add .
git commit -m "Primo commit: Jekyll About.me Theme"

# Aggiungi il tuo repository remoto
git remote add origin https://github.com/tuousername/tuousername.github.io.git
git push -u origin main
```

## 🎨 Personalizzazione

### Profilo e dati personali

Modifica `_data/author.yml`:

```yaml
name: "Mario Rossi"
bio: "Esploratore digitale, appassionato di tecnologia e spiritualità"
tagline: "Sviluppo web • Consapevolezza • Energie rinnovabili"
avatar: "/assets/images/avatar.jpg"
location: "Italia"

skills:
  - name: "Web Dev"
    color: "#2ecc71"
  - name: "Kimi"
    color: "#9b59b6"
  # ... aggiungi quante skill vuoi

social:
  instagram: "https://instagram.com/tuousername"
  bluesky: "https://bsky.app/profile/tuousername.bsky.social"
  github: "https://github.com/tuousername"
  email: "mailto:mario@example.com"

contact:
  formspree_url: "https://formspree.io/f/YOUR_FORM_ID"
```

### Categorie

Modifica `_data/categories.yml`:

```yaml
websmart:
  name: "WebSmart"
  icon: "💻"
  color: "#2ecc71"
  description: "Risorse e guide per lo sviluppo web"

# ... puoi aggiungere o modificare categorie
```

### Form contatti

Il form usa Formspree. Per configurarlo:

1. Vai su [formspree.io](https://formspree.io)
2. Registrati e crea un nuovo form
3. Copia l'URL del form (es. `https://formspree.io/f/abc123`)
4. Inseriscilo in `_data/author.yml` sotto `contact.formspree_url`

## ✍️ Creare nuovi post

I post vanno nella cartella `_posts/` con il nome nel formato:

```
YYYY-MM-DD-titolo-del-post.md
```

### Struttura del post

```yaml
---
layout: post
title: "Titolo del Post"
date: 2025-01-20 10:00:00 +0200
category: [websmart]  # o [awakena], [reiki], [vita-off-grid]
excerpt: "Breve descrizione del post"
tags: [tag1, tag2, tag3]
---

Contenuto del post in Markdown...
```

## 📁 Struttura del tema

```
├── _config.yml              # Configurazione Jekyll
├── _data/
│   ├── author.yml           # Dati autore
│   └── categories.yml       # Configurazione categorie
├── _includes/
│   └── head-custom.html     # CSS inline
├── _layouts/
│   ├── default.html         # Layout principale
│   └── post.html            # Layout post
├── _pages/                  # Pagine categoria
│   ├── websmart.html
│   ├── awakena.html
│   ├── reiki.html
│   └── vita-off-grid.html
├── _posts/                  # Articoli
├── index.html               # Homepage
└── README.md                # Questo file
```

## 🎯 Compatibilità

- **Jekyll**: 3.9.3+ (versione GitHub Pages)
- **GitHub Pages**: ✅ Pienamente compatibile
- **Plugin**: Solo whitelist GitHub (feed, sitemap, paginate)
- **Browser**: Chrome, Firefox, Safari, Edge (ultime versioni)

## 🎨 Colori e stile

I colori delle categorie sono:

- **Verde (#2ecc71)**: WebSmart
- **Viola (#9b59b6)**: Awakena
- **Rosso (#e74c3c)**: Reiki
- **Arancione (#f39c12)**: Vita Off-Grid

Puoi modificare i colori in `_includes/head-custom.html` nelle variabili CSS.

## 📱 Responsive Design

Il tema è completamente responsive e ottimizzato per:

- Desktop (900px+)
- Tablet (768px - 899px)
- Mobile (< 768px)
- Small Mobile (< 480px)

## 🔧 Risoluzione problemi

### Il sito non si aggiorna su GitHub Pages

Attendi 5-10 minuti. GitHub Pages impiega un po' per rigenerare il sito.

### Errore "Page build failed"

Verifica che:
- I file YAML non abbiano errori di indentazione
- I post abbiano tutti i campi richiesti nel front matter
- Non ci siano caratteri speciali nei nomi dei file

### Immagini non caricate

Assicurati che:
- Le immagini siano in `assets/images/`
- Il percorso in `author.yml` sia corretto (es. `/assets/images/avatar.jpg`)

## 🤝 Contributi

Se vuoi contribuire al tema:

1. Fai un fork del repository
2. Crea un branch per le tue modifiche
3. Invia una pull request

## 📄 Licenza

Questo tema è rilasciato sotto licenza MIT. Sentiti libero di usarlo, modificarlo e distribuirlo.

## 💬 Supporto

Se hai domande o problemi:

- Apri una issue su GitHub
- Scrivimi tramite il form contatti sul sito
- Connettiti su Instagram o Bluesky

---

**Buona fortuna con il tuo nuovo spazio web!** 🌟

Ricorda: il web è fatto per condividere. Non avere paura di mostrare chi sei e cosa ami fare.