<!-- BEGIN:alara-code-index -->
# Project documents

The approved documents of **Alam Guest house**, pushed from Alara Code. Each pipeline version's approved document is its own file, named after the version (for example `srs-v1.0.md` and `srs-v2.0.md`). Alara Code only adds files here: a file that is pushed is never overwritten or deleted, so every version's documents stay in the repository. The one exception is a version's prototype design file, which is replaced when the prototype is run again in that version. A document is added once it is approved in Alara Code.

Current pipeline version: **1.0**

## Pipeline versions

| Version | In file names | State |
| --- | --- | --- |
| 1.0 | `1.0` | open |

## Product discovery (`product_discovery/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| Project Scope | 1.0 | [scope-v1.0.md](product_discovery/scope-v1.0.md) | artifact v1 (current) |

## Tech discovery (`tech_discovery/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| Request for Proposal | 1.0 | [rfp-v1.0.md](tech_discovery/rfp-v1.0.md) | artifact v1 (current) |

## Architecture (`architecture/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| Software Requirements Specification | 1.0 | [srs-v1.0.md](architecture/srs-v1.0.md) | artifact v1 (current) |
| Technical Architecture Document | 1.0 | [tad-v1.0.md](architecture/tad-v1.0.md) | artifact v1 (current) |
| Software Design Specification | 1.0 | [sds-v1.0.md](architecture/sds-v1.0.md) | artifact v1 (current) |
| API Contract | 1.0 | [api-v1.0.md](architecture/api-v1.0.md) | artifact v1 (current) |

## Prototype (`prototype/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| UI Prototype | 1.0 | [prototype-v1.0.html](prototype/prototype-v1.0.html) | artifact v1 (current) |
| Prototype design file | 1.0 | [design-v1.0.md](prototype/design-v1.0.md) | prototype artifact v1 |

## Testing (`testing/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| Software Test Specification | 1.0 | [sts-v1.0.md](testing/sts-v1.0.md) | artifact v1 (current) |

## Releases (`releases/`)

| Document | Version | File | Status |
| --- | --- | --- | --- |
| Delivery Plan | 1.0 |  | not approved yet |

## Epics and tickets (`implementation/`)

The epics and tickets approved in Alara Code, one file per epic and per ticket, in a folder per pipeline version and named by unit id: a ticket is identified by its unit id, and the running ticket number is not written in the files. When a newer Tasks approval is pushed, the epics and tickets whose content changed are rewritten, and any that is missing from the repository (deleted by the team, or never delivered because a pull request was not merged) is written again; a ticket that is present and whose content did not change is left exactly as it is, even if it was edited. Edit tickets only after the last Tasks approval has been pushed, because a ticket whose content changed is overwritten by the next push. Files that Alara Code did not write are left alone. The repository copy is the working record of the team's coding agents.

| Version | Epics | Tickets | State |
| --- | --- | --- | --- |
| 1.0 | [epics/](implementation/v1.0/epics/) (12) | [tickets/](implementation/v1.0/tickets/) (44) | Tasks generation 1 |

## Team-owned folders

- `adr/`: The team's own architecture decision records, one file per decision, named `NNNN-<kebab-title>.md` (numbered in order, never reused).
- `deployment/`: Repeatable deployment procedures: how each environment is built, released and rolled back.
- `operator-docs/`: Dated runbooks for manual operator-side setup, one file per task, named `YYYY-MM-DD-<slug>.md`.
- `incidents/`: Post-incident reviews, one file per incident, named `INC-YYYY-MM-DD-<slug>.md`.

Alara Code created these folders once and never writes in them again.

## Project brief and design

- Project brief: the repository has its own root `AGENTS.md` / `CLAUDE.md`, which Alara Code did not touch. The approved brief (pipeline version 1.0, brief generation 1) is in Alara Code (Artifacts).
- Design: the root `DESIGN.md` is the design file of pipeline version 1.0.
<!-- END:alara-code-index -->
