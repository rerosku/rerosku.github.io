---
layout: post
title: "Come creare un sito statico con Jekyll e GitHub Pages"
date: 2025-01-20 10:00:00 +0200
category: [websmart]
excerpt: "Guida passo-passo per creare e pubblicare il tuo sito web statico gratuitamente utilizzando Jekyll e GitHub Pages."
tags: [jekyll, github-pages, web-dev, tutorial]
---

Creare un sito web statico non è mai stato così semplice. In questa guida ti mostrerò come utilizzare **Jekyll** e **GitHub Pages** per pubblicare il tuo sito online in pochi minuti, senza costi e con massima flessibilità.

## Perché scegliere Jekyll?

Jekyll è un generatore di siti statici che trasforma testo semplice in siti web completi. Ecco i vantaggi principali:

- **Gratuito**: Puoi ospitare il tuo sito gratuitamente su GitHub Pages
- **Veloce**: I siti statici caricano istantaneamente
- **Sicuro**: Nessun database = nessun rischio di attacchi SQL injection
- **Semplice**: Scrivi in Markdown, pubblichi ovunque

## Prerequisiti

1. Un account GitHub
2. Git installato sul tuo computer
3. Ruby e Jekyll (per lo sviluppo locale)

## Installazione

### 1. Crea un repository su GitHub

Crea un nuovo repository con il nome `tuousername.github.io` (sostituisci con il tuo username).

### 2. Clona il repository

```bash
git clone https://github.com/tuousername/tuousername.github.io.git
cd username.github.io
```

### 3. Installa Jekyll

```bash
# Installa Jekyll e Bundler
gem install jekyll bundler

# Crea un nuovo sito Jekyll
jekyll new . --force
```

### 4. Personalizza il tuo sito

Modifica il file `_config.yml` con le tue informazioni:

```yaml
title: "Il Mio Sito Web"
description: "Descrizione del mio sito"
url: "https://tuousername.github.io"
```

### 5. Pubblica su GitHub

```bash
git add .
git commit -m "Primo commit con Jekyll"
git push origin main
```

Dopo pochi minuti, il tuo sito sarà disponibile all'indirizzo `https://tuousername.github.io`.

## Personalizzazione avanzata

### Tema e layout

Puoi personalizzare l'aspetto del tuo sito modificando i file in `_layouts` e `_includes`. Jekyll usa il linguaggio di templating Liquid per rendere tutto dinamico.

### Post e pagine

I post vanno nella cartella `_posts` con il formato `YYYY-MM-DD-titolo.md`. Le pagine possono essere file HTML o Markdown nella root del progetto.

### Collection

Per organizzare contenuti specifici, puoi usare le collections. Ad esempio, crea una cartella `_projects` per i tuoi progetti.

## Conclusioni

Jekyll e GitHub Pages offrono una soluzione perfetta per chi cerca semplicità e potenza. In pochi passaggi puoi avere un sito web professionale senza spendere nulla.

Nel prossimo articolo esploreremo come creare temi personalizzati e ottimizzare il SEO. Stay tuned!