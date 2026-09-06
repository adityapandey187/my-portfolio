# Aditya Portfolio

## Project Overview

A personal portfolio website for Aditya, a first-semester Computer Science Engineering student. The site presents his current learning stage honestly and frames AI/ML as a long-term career goal.

## Current Profile

- Name: Aditya
- Role: Computer Science Engineering Student
- Status: First Semester
- Education: Bachelor's Degree in Computer Science Engineering
- Career goal: Become AI/ML Engineer

## What The Site Includes

- Responsive portfolio layout
- Hero section with current student status
- About section focused on learning foundations
- Skills section written as learning areas, not professional claims
- Projects section with only truthful, non-invented project information
- Education and learning journey sections
- Contact form validation with an honest note that messages are not delivered yet
- Local SVG illustrations and social preview image

## File Structure

```text
/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   |-- data.js
|   |-- icons.js
|   |-- main.js
|   `-- components/
`-- images/
    |-- favicon.svg
    |-- og-cover.svg
    |-- project-ai-ml.svg
    `-- project-portfolio.svg
```

## How To Run

Open the project through a local static server so JavaScript modules load correctly.

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Customization Notes

Personal content lives mainly in `js/data.js`. Keep future updates honest: add real project links, public social profiles, and contact email only when they are ready.
