---
name: commit-msg
description: Generate a conventional commit message from staged changes and commit them. Use when the user says "write a commit message", "generate a commit", "commit my changes", or runs /commit-msg.
---

# commit-msg

Generate a commit message from staged changes and commit them.

## Steps

1. Run `git diff --staged`. If there is no output (nothing staged), stop
   immediately and tell the user to stage their changes first (e.g. with
   `git add`). Do not proceed further.

2. Read the staged diff output to understand what changed and why.

3. Generate a commit message in this exact format:

   ```
   type(scope): short subject

   - bullet of what changed
   - bullet of why
   ```

   Rules:
   - `type` must be one of: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
   - `scope` is the affected area/module (omit the parens if there isn't a
     clear single scope).
   - `subject` must be under 60 characters, imperative mood, no trailing period.
   - Body bullets are optional but encouraged — include them when they add
     real information beyond the subject line. Skip bullets for trivial
     one-line changes.
   - Never include a `Co-Authored-By` trailer or any other trailer.

4. Run `git commit -m "<message>"` using a heredoc so multi-line messages are
   formatted correctly, e.g.:

   ```bash
   git commit -m "$(cat <<'EOF'
   type(scope): short subject

   - bullet of what changed
   - bullet of why
   EOF
   )"
   ```

5. Confirm the commit succeeded (e.g. `git status` or show the commit hash).
