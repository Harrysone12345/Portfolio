# Harrison Tracy — Portfolio

Plain HTML/CSS/JS. No build step. Works on GitHub Pages as-is.

```
index.html      Home: bio, headshot, category index, skills, contact
cfd.html        CFD & Aerothermodynamics projects
design.html     Design & Prototyping projects
coding.html     Coding & Software projects
css/styles.css  All styling
js/main.js      Mobile menu + image lightbox
images/         PNGs, one subfolder per project
videos/         MP4s
files/          PDFs, notebooks, resume
```

## Add a project
1. Open the category page (e.g. `design.html`).
2. Copy one `<article class="project-card">…</article>` and paste it into the list.
3. Edit the label (`DES-06 / …`), title, description, tool tags, and year.
4. Update the project count on `index.html` (the "N projects" text on that category's row).

## Add images
1. Drop the PNG into `images/<project-name>/`.
2. Add `<img src="images/<project-name>/file.png" alt="describe it" loading="lazy">`
   inside the card's `<div class="project-gallery">`. Clicking it opens the lightbox automatically.
3. Cards without images use `class="project-card text-only"` and have no `.project-media` block.
   To add images to one, remove `text-only` and add a `<div class="project-media">` with a gallery.

## Add a category
Copy `coding.html` to a new file, edit the content, then add a nav link in the `<header>` of every
page and a new row in the `<ol class="toc">` on `index.html`.

## Resume
Replace `files/Harrison_Tracy_Resume.pdf` (keep the same filename and both links keep working).
