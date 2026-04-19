# Development notes

## Editing

### Blog

- You can add a title and description by editing `blog_name` and `blog_description` in `_config.yml`.
- The website colors can be modified in `_sass/_custom.scss`.
- To add new posts, create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`.
- To add new news, create a new file in `_news/` with the format `YYYY-MM-DD-title.md`.

#### Writing Procedure

1. Writer drafts post.
2. Use the `blog-brainstorm` skill to brainstorm additional ideas for the post.
3. Writer works through the brainstorm and updates the post.
4. Use the `blog-refiner` skill to refine the writing.
5. Use the `blog-editor` skill to make sure everything is good to go before publishing.
6. Squash commits into a single post to be published.
7. Publish.

### Multi-Column Lists

Wrap a list in a `<div>` with a `list-cols-N` class to render it in N columns. `markdown="1"` is required so Jekyll processes the list inside the div. Supports 2, 3, or 4 columns.

```html
<div class="list-cols-3" markdown="1">

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6

</div>
```

### Front Matter

Front matter is a block of YAML at the top of a post file, between the `---` delimiters:

```yaml
---
layout: post
title: My Post Title
date: 2026-01-01 12:00:00
enable_datatables: true
dt_max_height: "400px"
---
```

Values set here apply to the entire post. You can define variables in the front matter and reference them in the post using `{{ page.variable_name }}`.

### DataTables

Add `enable_datatables: true` to a post's front matter to enable sortable, styled tables.

#### Front Matter Variables

These apply to **all tables** in the post:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `enable_datatables` | Enables DataTables for the post. | `true` |
| `dt_max_height` | Caps table height and adds a vertical scrollbar. Any CSS height value. | `"400px"` |
| `dt_font_size` | Sets the font size for table cells. Any CSS font-size value. | `"0.85rem"` |

#### Per-Table Overrides

To configure an individual table differently from the page defaults, wrap it in a `<div>` with `data-dt-*` attributes. The `markdown="1"` attribute is required so Jekyll processes the Markdown inside the div.

```html
<div data-dt-max-height="300px" data-dt-font-size="0.8rem" markdown="1">

| col1 | col2 |
| :--- | :--- |
| a    | b    |

</div>
```

| Attribute | Description |
| :--- | :--- |
| `data-dt-max-height` | Caps height for this table. Overrides `dt_max_height`. |
| `data-dt-font-size` | Sets font size for this table. Overrides `dt_font_size`. |
| `data-dt-col-toggle` | Adds toggle buttons to show/hide groups of columns. See below. |

Per-table attributes take priority over front matter values. A table not inside a `data-dt-*` div uses the front matter values as defaults.

#### Column Toggle

`data-dt-col-toggle` adds a button above the table for each group of columns that can be shown or hidden. Columns are **zero-indexed**.

Each group follows the format `range:Label:initial`, where:
- `range` — a contiguous range (`start-end`) or non-contiguous indices separated by `;`
- `Label` — the name shown in the button as **"Show [Label] Cols"**
- `initial` — `show` (default) or `hide` — whether the columns start visible or hidden

Separate multiple groups with commas.

```html
<!-- Single group, starts visible -->
<div data-dt-col-toggle="3-9:Tournament:show" markdown="1">

<!-- Multiple groups, Tournament starts hidden, Scoring starts visible -->
<div data-dt-col-toggle="3-9:Tournament:hide, 10-13:Scoring:show" markdown="1">

<!-- Non-contiguous columns -->
<div data-dt-col-toggle="3;5;7:Selected:show" markdown="1">
```

### Site Colors

Website colors are set via variables at the top of `_sass/_custom.scss`:

| Variable | Description |
| :--- | :--- |
| `$light-theme-color` | Link and theme color in light mode (e.g. buttons, hover, active states). |
| `$dark-theme-color` | Link and theme color in dark mode. |
| `$table-header-light-bg` | Table header background in light mode. |
| `$table-header-dark-bg` | Table header background in dark mode. |
| `$base-font-size` | Global base font size for body text. |

Change only these variables to retheme the site — all interactive elements (links, column toggle buttons, hover states) derive their color from `$light-theme-color` / `$dark-theme-color` automatically via the `--global-theme-color` CSS variable.

## Software

### ssh

- Type passphrase once: `ssh-add <public_key_file>`
- Test connection: `ssh -T git@github.com`

### git

#### Uncommited Local Changes
- Modified files: `git status`
- Diff: `git diff`

#### Committed Local Changes
- Add files and directories to be committed: `git add <file/dir>`
- Commit local changes: `git commit -m "<message>"`
- See commits that haven't been uploaded yet: `git log origin/main..main`
- Diff committed & uncommitted changes vs last fetch: `git diff HEAD origin/main`

#### Remote Changes
- Check for newer changes: `git fetch`
- Get newer changes: `git pull origin main`
  > [!IMPORTANT]
  > **What if there are conflicts?** 
  > Conflicts happen if you and someone else (or you on another machine) changed the exact same line of the same file. Git will stop the `pull`, mark the conflicting lines in the file with `<<<<<<<`, `=======`, and `>>>>>>>`, and ask you to fix them. You'll need to edit the file, pick the correct version, then `git add` and `git commit` to finish.
- Upload committed local changes to remote repository: `git push origin main`

#### Other Useful Commands
- View history (compact list): `git log --oneline`
- Undo uncommitted changes in a file: `git checkout -- <filename>`

## Testing

- Launch the Docker app.
- `make up` (or `docker compose up`)

## Migrating to a fresh al-folio

If you want to start over with a brand new `al-folio` instance and port your Analytical Sparc changes over:

1. **Create the Bundle**: On your current instance, run:
   ```bash
   make bundle
   ```
   This generates `analytical-sparc-custom.tgz` containing all your custom configurations, posts, and overrides.

2. **Extract to New Instance**: Copy the `.tgz` file to the root of your fresh `al-folio` directory and run:
   ```bash
   tar -xzf analytical-sparc-custom.tgz
   ```

3. **Finalize**: Your customizations are now in place. Run `make up` to verify.
