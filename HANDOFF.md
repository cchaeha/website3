# HANDOFF — dual-agent baton (Claude ↔ codex)
<!-- Read before editing; update before ending a substantive session.
     Baton, not archive: detail goes to git log.
     Keep under ~80 lines; prune Last sessions to 5. -->

Repo = www.humlab.co (GitHub Pages, cchaeha/website3, branch main). Static HTML,
Pixelarity "Formula" template. No build step: push to main = deploy.

## In flight — do not finalize without taking ownership
- (none — everything through the ASU transition + colorway update is pushed)
- External (Chris, not an agent): Benzamin redesign proposal — needs §02 rewritten
  for the right lab (it analyzes ASU's Humanities Lab program, not HUM.Lab), a
  humlab.co-vs-asu.edu domain decision, and a configuration pick.

## Open defects — flagged, unowned
- team.html — alumni cards keep student-era titles ("MS in Epidemiology Student",
  "Expected 2026"); update with grad years / destinations when known.
- images/ — unused Tucson-era media (test4.webm, tucsonvid.mp4, test.mov,
  banner.mp4/webm, tucson2.jpeg, image1.jpg) bloats the repo; safe to delete.

## Last sessions (newest first, max 5)
- 2026-08-26 claude: added Goeun Jung (PhD student; edu from her personal site)
  and Louise Biville (visiting PhD student) from the "Website" email thread.
- 2026-08-18 claude: fixed papers.html defects (K-IOP duplicate removed, ISPRS
  link corrected to its real DOI); shipped codex's uncommitted fixes
  (Lab-at-a-Glance removal, work.html recolor); scaffolded this baton.
- 2026-08-18 claude: ASU transition day — affiliation/banner, 2 new 2026 papers,
  team moves (Maiya in, 5 to Alumni), Phoenix photos + rotating hero videos,
  favicon, maroon/gold colorway, icons fixed, meta descriptions.
- 2026-08-18 codex(?): uncommitted working-tree edits found (impact band removal,
  work.html mint→maroon) — shipped by claude, see above.

## Standing rules (binding for both agents)
- team.html and work.html carry their OWN inline <style> blocks. Any sitewide
  color/style change must hit main.css AND each page's inline styles (violated
  2026-08-18: projects page stayed green after the main.css recolor).
- GitHub Pages CDN caches ~10 min. Verify deploys with a cache-busting query or
  by waiting — do not re-edit because a pushed change "didn't appear".
- This filesystem is case-insensitive; Pages is case-sensitive. Image hrefs must
  match file case exactly (lablogo.png ≠ LabLogo.png), and no .heic (won't render).
- Media must be license-clean (Wikimedia Commons CC BY / CC BY-SA, Pexels) with
  the footer credit line updated. No unlicensed stock.
- Local repo was once re-initialized (unrelated histories vs remote). Always
  fetch/merge before push; never force-push.
- Commit at session end with message prefix claude:/codex:, repo paths only.
- Quick sanity check before commit:
  python3 -c "import html.parser; [html.parser.HTMLParser().feed(open(f).read()) for f in ['index.html','team.html','papers.html','work.html']]; print('OK')"
