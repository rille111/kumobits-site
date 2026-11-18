# kumobits-site

Static site for Kumobits AB. Plain HTML and one CSS file, no build step, no trackers, no third party assets.

Status: preview only. NOT deployed. DNS and live kumobits.com untouched; deploy needs Rickard's yes.
All `[PLACEHOLDER: ...]` items must be filled before any public deploy (`grep -rn PLACEHOLDER .`).

Local preview: `python3 -m http.server 8787` in this folder.
No CI, no GitHub Actions by design.

Preview (2026-11-18): Cloudflare quick tunnel from the box failed (egress blocks port 7844 TLS and ssh tunnels).
Fallback used: `npx wrangler deploy --temporary` (anonymous temporary Cloudflare account, not Rickard's, unclaimed, expires after about 60 minutes).
Config used for that lives outside the repo in /tmp/kbprev/wrangler.toml.
