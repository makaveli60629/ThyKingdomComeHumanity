# The Gathering — Thy Kingdom Come Member Portal Blueprint
Version: 1.0 | Prepared: 2026-11-21 | Status: implementation plan, not live software

## Purpose
Build a secure, compassionate, community-centered account system for **Thy Kingdom Come Humanity Ministry** on `thykingdomcomehumanity.org`. Motto: **Come as you are. Find your purpose. Help build a better world.**

The existing GitHub Pages site currently uses FormSubmit email interest forms, not stored profiles or authentication. This specification does **not** claim that a live portal, directors, or legal corporate members already exist.

## Experience and navigation
- **Header:** The Gathering / My Profile / Community / Projects / Donate (logged-out: Join / Sign in)
- **/members.html:** Public explanation and account entry
- **/register.html:** Email-based signup, email verification, consent, privacy notice, no required photo
- **/login.html:** Sign in / password reset / sign out
- **/dashboard.html:** Private personalized dashboard, current application statuses, profile completion
- **/profile.html:** Edit own profile, upload/change image, privacy settings
- **/community.html:** Search only opt-in public profiles; location should default to city or region rather than exact street address
- **/projects.html:** Member-submitted, admin-moderated ideas and projects/solution proposals
- **/apply.html:** Applications for volunteer, ministry service, coordinator, partner liaison, pastoral affiliation, prospective founding director
- **/admin.html:** Moderation and governance review (server-enforced authorization; ordinary users must not reach application decision data)

## Profile fields
User-controlled, initially private:
- display name, optional pronouns, optional avatar (default winged-sword placeholder), short biography
- city/region/country only if willingly disclosed; no required street address
- church/congregation (optional; self-claimed affiliations clearly distinguished from verified ones)
- areas of service, skills, languages, availability, vision and proposed practical solution
- profile visibility: private by default; explicit opt-in to publish selected fields

Private operational fields: email, consent timestamps, role application answers, review notes, approval records; no public email by default. Do not request SSNs, personal financial data, health history, or government IDs in ordinary signup.

Public profile cards may show: photo, name, personal short bio, city, optional congregation, causes served, **verified ministry role (if granted)** and published solution proposals.

## Authorization and legal guardrails
A website "community account" is **not** statutory voting membership in the Illinois corporation.
"Director," "officer," "pastor," "moderator," "administrator," and other official badges are **not editable by the account owner**.
A prospective director must be evaluated under the future articles/bylaws and applicable law; an appropriate appointment or election and written record precede an official directory badge.
A visitor may describe an external role (e.g. "pastor at ABC church") but it is labeled "self-described" until independently verified.
The portal must never say that incorporation or IRS determination has occurred without documented confirmation.

Recommended progression:
1. New account -> verified email -> community participant
2. Profile complete -> applies for an optional role
3. Application status -> Submitted / Under Review / Additional Information / Approved / Declined / Withdrawn
4. Administrative review records decision. For legal directors/officers, require governance evidence.
5. Authorized server-side action grants official badge with effective date, recorded approving actor, and non-public supporting document reference.
6. Revocations and changes are logged and immediately reflected in public badges.

## Technical architecture (cost-conscious)
- Keep the existing `makaveli60629/ThyKingdomComeHumanity` repository and GitHub Pages site for HTML/CSS/JavaScript and public pages.
- Proposed backend: Supabase Auth (email confirmation and password reset), PostgreSQL, Storage for avatar images, Edge Functions for restricted admin actions.
- Start on Supabase Free if within current limits; monitor storage, email delivery, and free-project inactivity rules before launch.
- Store only the public Supabase project URL and **publishable** key in front-end config. **Never** store a secret/service-role key or raw credentials in GitHub.
- All personal-data tables and file buckets must have carefully tested Row Level Security (RLS); treat front-end access controls as appearance only, never the authorization mechanism.
- Project owner and at least one backup authorized administrator should use strong sign-in with MFA and protected recovery.
- Keep Zeffy independent for donations; never merge payment credentials or individual donor lists into public profiles by default.
- Use safe image type/size validation, output sanitization, rate limiting/abuse prevention, photo reporting, and content moderation.
- Backups, retention/deletion policy, consent withdrawal, access logging, and export/deletion request procedures before accepting real users.
- For minors: initial portal registration should be 18+ until a reviewed child/guardian policy and moderation are in place.

## Proposed data entities
- `profiles`: auth_user_id, display_name, city/region, bio, avatar object key, church name, service themes, visibility settings
- `profile_publications`: approved/public projection only (never raw private applicant record)
- `role_applications`: applicant_id, requested_role, motivation, experience, review_status, created_at, private review metadata
- `role_appointments`: user_id, official_title, verification_status, authorizing_record_id, effective/expiry dates, appointed_by
- `church_affiliations`: declared church, relevant contact, opt-in verification
- `community_solutions`: author_id, challenge category, proposed solution, community, moderation state, project status
- `audit_events`: immutable actor, event, subject, timestamp, decision-reference
Implement schema with indexes, unique constraints, migration versioning, tests and server-side permissions. Do not expose application notes or governance records in public SELECT policies.

## Homepage integration
A "Join The Gathering" call-to-action can replace or complement the current Join section **only after** authenticated registration works end-to-end.
Preserve existing functioning FormSubmit interest forms as a fallback during migration.
Do not publish nonfunctional signup/login buttons that suggest registration succeeded.

## Site look and feel
Respect existing midnight-blue + warm-gold identity, winged-sword emblem, accessible typography, and animated golden-light header. Profiles should resemble dignified community membership cards, not status competition: warm photo circle, clear displayed name, geographic region, optional church, statement of purpose, service areas, privacy controls. No public ranking of people based on donations, religion, or personal hardships.

## Acceptance tests before opening registration
1. User signs up, verifies email, logs in and out, resets password.
2. User uploads, changes and removes optional photo; image permissions enforce ownership.
3. User edits own data but cannot edit another user's data.
4. User cannot set `director` or `admin` in browser, API, or user metadata.
5. Applicant sends a role application; reviewer sees it; applicant cannot see private review notes.
6. Official title appears publicly only after correct recorded approval.
7. Public directory only displays opted-in, appropriate fields; withdrawal removes them.
8. Abuse and spam controls, account deletion/export, and recovery tested on mobile.
9. Existing donation button, Zeffy fundraising thermometer and church landing page keep working.

## Current blocker and next execution step
Supabase account/project must be created or connected and owned by the church; then safely provision Auth + schema + buckets + RLS policies, implement frontend pages, test with **test accounts**, and deploy. Do not invent users, approvals, roles, financial activity, or legal status.
