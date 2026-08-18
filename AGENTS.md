# Agent instructions — codex
This repo is co-edited by codex and Claude Code in alternating sessions.
It is the live lab website: push to main = deploy to www.humlab.co.

1. Read HANDOFF.md at the repo root before changing anything. Items under
   "In flight" owned by the other agent are do-not-finalize; take ownership
   in that file first if you must touch them.
2. Standing rules in HANDOFF.md are binding.
3. Before ending a session with substantive changes: update HANDOFF.md
   (move finished items out of In flight, add one dated "Last sessions"
   line prefixed "codex:", prune to 5).
4. Commit at session end with message prefix "codex:", repo paths only.
   Fetch/merge before push; never force-push.

Tests (pre-commit sanity):
python3 -c "import html.parser; [html.parser.HTMLParser().feed(open(f).read()) for f in ['index.html','team.html','papers.html','work.html']]; print('OK')"
