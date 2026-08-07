<div align="center">

[![OpenPatch](https://raw.githubusercontent.com/openpatch/branding/main/logos/png/openpatch-text-dark_1024.png)](https://openpatch.org)

</div>

# OpenPatch

This is the repository for our organization website, [openpatch.org](https://openpatch.org).

It is built with [Hyperbook](https://hyperbook.openpatch.org), our own static
site generator, and deployed to GitHub Pages.

See our [branding repository](https://github.com/openpatch/branding) for more
information about the values and aims of OpenPatch.

## Structure

| Path | Contents |
| -- | -- |
| `hyperbook.json` | Site configuration: branding, navigation and links |
| `book/` | The pages, written in Markdown |
| `public/` | Static assets that are copied to the site root |
| `snippets/` | Handlebars templates used by `::pagelist` |

## Developer

Run the development server:

```
npx hyperbook dev
```

Open http://localhost:8080 with your browser to see the result.

Build the static site:

```
npx hyperbook build
```

The output is written to `.hyperbook/out` and can be served by any static host.

## Branding

The logos, fonts and colors in `public/` come from the
[branding repository](https://github.com/openpatch/branding). When they change
there, copy the updated files over:

- `public/logo.png` — `logos/png/openpatch-plain-mixed_512.png`
- `public/images/logos/*.svg` — `logos/svg/*.svg`
- `public/fonts/Montserrat-VariableFont_wght.ttf` — `fonts/`

The brand colors used in `hyperbook.json` are OpenPatch Green `#007864` and
Fresh Mint `#b5e3d8`.

## Deployment

`.github/workflows/deploy.yml` builds the book and publishes `.hyperbook/out` to
GitHub Pages on every push to `main`. The custom domain is set through
`public/CNAME`.

If you host the site somewhere else instead, use `npx hyperbook build` as the
build command and `.hyperbook/out` as the output directory.
