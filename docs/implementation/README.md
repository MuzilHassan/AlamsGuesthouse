<!-- alara-code:folder-readme -->
# Implementation

Alara Code wrote this folder: one folder per pipeline version (for example `v1.0/`), each with `epics/` (one file per epic, a design component) and `tickets/` (one file per ticket, an implementation unit), and `bugs/` and `spikes/` for the team's own. A file is named by its unit id (`v1.0/tickets/DC-001-02.md`), and a ticket is identified by its unit id: the running ticket number is not written in these files, because it changes whenever a unit is inserted.

When a newer Tasks approval is pushed, Alara Code rewrites the files whose content changed, adds the new ones and removes the ones that Tasks no longer has. A ticket that is missing from the repository (deleted by you, or never delivered because a pull request was not merged) is written again. A ticket that is present and whose content did not change is left exactly as it is, even if you edited it (set its `status`, ticked its task boxes). Edit a ticket only after the last Tasks approval has been pushed, because a ticket whose content changed is overwritten by the next push. Alara Code only ever writes `status: draft`, when it creates or rewrites a ticket, and it never touches a file it did not write: your own files in these folders, and the `bugs/` and `spikes/` READMEs, are left alone.

Status values: `draft -> ready -> in-progress -> review -> done`.

Nothing is written from these files back to Alara Code.
