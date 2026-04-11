# Development notes

## Editing

### Blog

- You can add a title and description by editing `blog_name` and `blog_description` in `_config.yml`.

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

- Launch Docker app.
- `docker compose up`

## Migrating to a fresh al-folio

If you want to start over with a brand new `al-folio` instance and port your changes over, follow this checklist:

### 1. Configuration (`_config.yml`)
Ensure you port these key settings:
- `title`, `first_name`, `middle_name`, `last_name`
- `url` and `baseurl`
- `max_width` (currently `930px`)
- Any enabled features (e.g., `search_enabled`, `navbar_fixed`)

### 2. Assets
- **Logo**: Copy `assets/img/logo.png`.
- **Favicon**: If customized, port the `icon` setting in `_config.yml` or the file in `assets/img/`.

### 3. Content
Copy these directories/files:
- `_posts/`: All your blog posts.
- `_news/`: All your news items.
- `_pages/about.md`: Your customized about page (ensure it still uses `layout: about_custom`).
- Any other custom pages in `_pages/`.

### 4. Structural & Styling Overrides (The "Clean" Way)
To keep the new theme pristine, copy these specific files:
- **Layout**: `_layouts/about_custom.liquid` (The two-column layout).
- **Styles**: `_sass/_custom.scss` (Contains logo sizing AND the custom blue link colors).
- **Registration**: In the fresh `assets/css/main.scss`, add `@use "custom";` at the very end of the file.

