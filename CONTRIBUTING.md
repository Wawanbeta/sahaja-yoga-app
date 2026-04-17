# Contributing to Sahaja Yoga App

Thank you for considering a contribution. This project is an early open-source effort to build a privacy-first, cross-platform Sahaja Yoga app for inspiration, meditation, mantras, talks, offline access, and personal reflection.

The project is still young, so contributions that improve structure, documentation, safety, accessibility, and maintainability are especially valuable.

## Where Things Belong

- Product and planning: `docs/product/`
- Architecture decisions: `docs/architecture/`
- UX and design system: `docs/design/`
- Delivery and quality process: `docs/delivery/`
- Flutter app: `apps/mobile_desktop/`
- TypeScript API: `services/api/`
- Shared API contracts: `packages/shared_contracts/`
- Editorial source work: `content/`
- CMS planning: `cms/`

## Contribution Principles

- Keep the app useful without requiring an account.
- Treat journal data and user practice history as sensitive.
- Do not add unverified quotes, mantras, dates, or spiritual claims as approved content.
- Include source and review status for any spiritual or historical content.
- Prefer small, reviewable changes over large mixed changes.
- Keep external APIs behind the internal app API.
- Include loading, empty, error, and offline states for user-facing features.
- Avoid collecting analytics unless it is explicit, consent-based, and privacy-preserving.

## Content Contributions

Spiritual and source-related content needs extra care.

Please include:

- original source URL or citation
- language
- translation status, if applicable
- review status
- notes about uncertainty

Do not submit:

- copyrighted text, images, audio, or video unless reuse is clearly allowed
- direct quotes without source information
- health, medical, or spiritual promises that cannot be verified
- AI-generated spiritual claims presented as authoritative

Use `needs_review` or `draft` when content is not yet verified.

## Code Contributions

Before opening a pull request:

1. Keep the change focused.
2. Update documentation when behavior or architecture changes.
3. Add or update tests for API behavior.
4. Run the available checks.

Current checks:

```bash
npm run api:build
npm run api:test
npm run contracts:check
```

Flutter checks will be added once the Flutter SDK setup is complete:

```bash
cd apps/mobile_desktop
flutter pub get
flutter analyze
flutter test
```

## Pull Request Checklist

- The change has a clear purpose.
- Tests were added or the reason for not adding tests is explained.
- Documentation was updated if needed.
- No secrets, API keys, certificates, or private data were committed.
- User-facing changes consider accessibility.
- Content changes include source and review status.
- Privacy-sensitive features avoid unnecessary data collection.

## Security and Privacy

Please do not open public issues for serious security vulnerabilities involving private data, authentication, API keys, or infrastructure secrets. Instead, contact the maintainers privately once a security contact is published.

Until a security policy is added, avoid posting exploit details publicly.

## Community Standards

All contributors are expected to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

