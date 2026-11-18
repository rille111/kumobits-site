# kumobits-site

Static site for Kumobits AB. Plain HTML and one CSS file, no build step, no trackers, no third party assets.

Status: revision 2 (AI specialist, About, confidentiality, GDPR privacy policy, Rickard's defaults applied). No placeholder strings remain; verify with a grep for the placeholder marker before deploy.
Production target: Cloudflare Pages on Rickard's own account (deploy handled separately).

Local preview: `python3 -m http.server 8787` in this folder.
No CI, no GitHub Actions by design.

Preview (2026-11-18): Cloudflare quick tunnel from the box failed (egress blocks port 7844 TLS and ssh tunnels).
Fallback used: `npx wrangler deploy --temporary` (anonymous temporary Cloudflare account, not Rickard's, unclaimed, expires after about 60 minutes).
Config used for that lives outside the repo in /tmp/kbprev/wrangler.toml.
