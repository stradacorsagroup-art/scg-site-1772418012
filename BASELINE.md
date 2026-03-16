# Dealhaus Canonical Baseline

This baseline is pinned to the **current live view** approved by Amir.

- Live URL(s):
  - https://dealhaus.co
  - https://www.dealhaus.co
- Canonical deployment: `scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app`
- Captured from live aliases: ✅
- Repo marker commit: `9828dc1`
- Baseline tag: `baseline-current-live-6td86yy38`

## Rules
1. Do not deploy directly to production from ad-hoc edits.
2. Every edit starts from this baseline tag/branch.
3. Preview first, then explicit human approval, then promote to live.
4. If anything looks off, rollback aliases back to this canonical deployment.

## Instant rollback
```bash
vercel alias set scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app www.dealhaus.co
vercel alias set scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app dealhaus.co
```
