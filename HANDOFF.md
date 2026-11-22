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
- codex: 2026-11-22 - Added the other two v24 deck animations as unlisted pages: Ida and Phoenix-area police calls in summer 2023. Added both to the unlisted gallery; existing public pages/navigation and the original heat replay are unchanged. All 408/346 frames retained; presentation timestamps match the source GIFs. Desktop/mobile playback, controls, range requests, noindex and reduced-motion checks pass.
- codex: 2026-11-22 - Restored the original EMSNYC visualization and media at Chris request. The gallery and replay remain unlisted and noindex; no links were added to existing public pages or navigation. All six restored files match the original deployment exactly.
- codex: 2026-11-20 - Removed the Visualizations section, heat-wave preview and hosted media at the author request. Local copies are retained in EMSNYC presentations/heat_web_20261120/output/site_snapshot and the Benz review packet. Restore only on a new author request.
- codex: 2026-11-20 - Added the original EMSNYC heat-wave replay under an unlisted Visualizations section. Desktop/mobile H.264 playback, menu, direct player and reduced-motion checks pass. Existing public navigation is unchanged; both pages request no indexing. No local redesign files were published. Media retains all 337 source frames and the original count/windows; 28.08 s loop.
- 2026-08-26 claude: added Goeun Jung (PhD student; edu from her personal site)
  and Louise Biville (visiting PhD student) from the "Website" email thread.

## Standing rules (binding for both agents)
- The visualization collection is unlisted at Chris request (Nov 22). Keep every replay and the gallery out of existing public pages, navigation and sitemaps; retain noindex metadata. Anyone with a URL can view it; there is no authentication gate.
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
