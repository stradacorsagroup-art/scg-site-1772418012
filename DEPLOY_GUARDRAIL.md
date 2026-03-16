# Dealhaus Deploy Guardrail (MANDATORY)

## Current Live Baseline
- Domain aliases:
  - `dealhaus.co`
  - `www.dealhaus.co`
- Pinned deployment: `scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app`
- Canonical baseline doc: `BASELINE.md`
- Baseline tag: `baseline-current-live-6td86yy38`

## Non-Negotiable Flow
1. **Never deploy directly to live first.**
2. Create a tiny patch in main repo only.
3. Run:
   - `npm run check:inventory-media`
   - `npm run build`
4. Run text-only scope guard (example for homepage text tweak):
   - `npm run guard:text-only -- src/app/page.tsx`
5. Deploy preview only:
   - `vercel --yes`
6. Human visual approval required.
7. Promote to live:
   - `vercel --prod --yes`
8. If anything is off: immediate rollback alias to baseline deployment.

## Instant Rollback Command
```bash
vercel alias set scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app www.dealhaus.co
vercel alias set scg-site-6td86yy38-stradacorsagroup-7833s-projects.vercel.app dealhaus.co
```

## For text-only changes
Allowed changed file(s) must be explicit (usually just one):
- `src/app/page.tsx`

If any additional file changed, abort deploy.
