# Thy Kingdom Come Humanity

Static, responsive website for GitHub Pages. Includes home, mission, ministries, housing vision, 144 Churches initiative, founding support, contact, and custom 404.

## Launch
1. GitHub repository Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save.
2. In Pages, enter custom domain `thykingdomcomehumanity.org` once domain ownership and DNS are ready.
3. At IONOS, set apex A records to GitHub Pages IPv4 addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. For `www`, set CNAME to `makaveli60629.github.io` (no repository suffix). Remove conflicting A/AAAA/CNAME records for the same host. Wait for DNS and enable Enforce HTTPS in GitHub Pages when available.
4. Verify both apex and www, and configure the preferred canonical domain.

## Donations
Donation button currently directs to the founding-support section; **no payment collection is active**. Only replace with a verified, organization-owned processor after appropriate legal/tax review and a dedicated account. Do not publish bank details or personal payment links.

## Contact
No unverified contact address is published. Add an official ministry email and accessible contact form when confirmed.

## Editing
Main page: `index.html`. Styling: `assets/style.css`. Custom missing-page experience: `404.html`.
