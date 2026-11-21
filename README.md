# Thy Kingdom Come Humanity

Static, responsive website for GitHub Pages. Includes home, mission, ministries, housing vision, 144 Churches initiative, founding support, contact, and custom 404.

## Launch
1. GitHub repository Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save.
2. In Pages, enter custom domain `thykingdomcomehumanity.org` once domain ownership and DNS are ready.
3. At IONOS, set apex A records to GitHub Pages IPv4 addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. For `www`, set CNAME to `makaveli60629.github.io` (no repository suffix). Remove conflicting A/AAAA/CNAME records for the same host. Wait for DNS and enable Enforce HTTPS in GitHub Pages when available.
4. Verify both apex and www, and configure the preferred canonical domain.

## Donations
The homepage displays a disabled **DONATE · COMING SOON** button, and other pages link to that funding-information section. **No payment collection is active**. Only replace with a verified, organization-owned processor after appropriate legal/tax review and a dedicated account. Do not publish bank details or personal payment links.

## Contact
The website shows `thykingdomcomeproject@gmail.com` as its founding contact and uses FormSubmit for interest and contact forms. Verify the service's activation and successful end-to-end submissions before relying on it for registrations.

## Editing
Main page: `index.html`. Styling: `assets/style.css`. Custom missing-page experience: `404.html`.

## Councils and ranks
The public-facing `councils.html` explains the founding-stage Council of Shepherds, Divine Warriors, and proposed rank pathway. It is linked from the homepage and the invitation/volunteer menus and uses the existing ministry interest forms; no dedicated rank-awarding system or database exists yet. Do not represent unverified applicant submissions as received or ranks as conferred. Verify the third-party form workflow before recruitment campaigns.

## Site consistency
All ministry pages now include the shared falling-light header script (`assets/header-rain.js`), the founder attribution (`“I AM WHO I AM”`) and a bottom-most co-founder credit. The site links users to the homepage support section instead of a live payment processor. Keep future donations tied to a verified organization-owned account with proper legal status and truthful tax disclosures.
