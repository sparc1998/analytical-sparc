# Analytical Sparc - Custom Agent Instructions

This file contains specific context and rules for AI assistants working on the **Analytical Sparc** blog. These rules take precedence over the theme's general guidelines.

## Project Context

- **Analytical Sparc** is a sports-focused blog built on the `al-folio` theme.
- The project follows a "Clean Override" pattern: all customizations should go into `_sass/_custom.scss` or dedicated includes.

## Development Rules

- **Sortable Tables**: Always use the **DataTables** integration for posts where table sorting is required. Enable it by adding `enable_datatables: true` to the post's front-matter.
- **Table Styling**: Tables should always be left-aligned (`w-auto`) by default unless otherwise specified.
- **Portability (CRITICAL)**: Always maintain the [`Makefile`](Makefile) and keep the `BUNDLE_FILES` list updated with any new custom assets, layouts, or includes. This is essential for the `make bundle` command to capture your changes.
