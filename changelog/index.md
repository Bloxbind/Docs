# Changelog

All notable changes to Bloxbind will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.1.0] - 2025-07-12 - Bot

### Added

- Initial release of the bot.
- Simple verification system.

## [0.1.0] - 2025-07-12 - Website

### Added

- Initial release of the website.
- Secure and simple workflow for verification.

---

## [1.1.0] - 2025-09-12 - Website

This update accomplishes a lot of features I wanted at release but just didn't have time to complete. I have done a lot of testing and haven't found issues yet, but as always please report any issues. (PS. A bot update will be coming hopefully later today to support these new changes)

### Added

- New pages and controls for managing individual servers.
- Added a button to invite the bot.
- The Roblox profile photo now refreshes when it expires.
- Added icons to the homepage for the stats and sections.
- Added a Dashboard page to display servers that the bot is in and that you can manage.
- Added a page for managing a server when you select it from the dashboard.
- Added a user data export feature to the profile page.

### Changed

- The account **Dashboard** is now called **Profile**.
- Updated the team page with new profile images.
- Improved overall navigation on mobile.
- The footer now includes links to Bluesky and GitHub.
- The profile page now loads faster.
- The user context dropdown now includes links to both your profile and your dashboard.

### Fixed

- Prevented the same Roblox account from being linked to multiple Discord accounts. (This was silently released into production 2 weeks ago)
- Fixed issues with API response times for a smoother experience.
- Various bug fixes.

## [1.1.0] - 2025-09-12 - Bot

### Added

- Support for settings that can be managed via our web dashboard.
- New members can now be verified automatically when joining (requires the setting to be enabled).
- Members receive names automatically on join (requires the setting to be enabled).
- /verify that can be used if automatic verification fails or if the server doesn’t have a panel set up.
- Added support for custom naming schemes and related settings

### Changed

- Changed some of the bots permissions to allow us to continue adding features.
- Removed settings command. (Everything is handled via the dashboard.)

---

## [1.1.1] - 2025-09-12 - Website

Quick hotfix to address some issues we have seen since release.

### Fixed

- When signing up users accounts would not be created.
- Deleting accounts was not working.

## [1.1.1] - 2025-09-27 - Bot

### Fixed

- Bug with the settings command being deprecated.

## [1.2.0] - 2025-10-12 - Bot

### Added

- The `/me` command now always displays the user's profile picture.
- The bot can now remove roles during verification if the option is enabled.

### Fixed

- Improved error handling.
- General maintenance and bug fixes.

## [1.2.0] - 2025-10-12 - Website

### Added

- Jack O' Lantern for Halloween.
- Thanks page (may be removed).
- New server settings option to enable and use Remove Role(s).

### Changed

- Updated profile pictures.

### Fixed

- General maintenance and bug fixes.

## [1.2.1] - 2025-11-13 - Website

### Added

- The support server is now linked in Header / Navigation Bar.
- A little help tip for the naming scheme.

### Changed

- Added new character options to the naming scheme "|" and "<>".
- Jack O' Lantern Removed.

### Fixed

- General maintenance and bug fixes.

## [1.3.0] - 2026-1-03 - Website

### Added

- Support for linking a Roblox group to a server.
- Support for linking Roblox group ranks and Discord roles.
- A cute holiday snow effect.

### Changed

- Navigation updated to include documentation links.
- Improved rate-limiting responses.
- Updated robots.txt.

### Fixed

- Change the display of Total Members from "Users" to "Members".
- Minor UI/UX adjustments around group management and validation feedback.
- Duplicated items in the settings page.
- Security & Performance fixes.

## [1.3.0] - 2026-1-03 - Bot

### Changed

- Slash Command & Button logic for the new group ranks system.

## [1.3.1] - 2026-3-28 - Website

### Changed

- The dashboard now has been condensed to make it easier.
- Removed the snow effect.
- Fixed the team profile pictures.

### Fixed

- Fixed Roblox unlinking issue on profile page.
- Security Improvements.

## [1.4.0] - 2026-3-31 - Website

### Added

- Minimum Account Age Verification Feature.

### Changed

- Privacy policy updated.

### Fixed

- Dashboard UI Issues.

## [1.4.0] - 2026-3-31 - Bot

### Added

- Minimum Account Age Verification Feature.

### Fixed

- Issues with crashing on certain interactions.
- Timeouts on commands causing no result to be returned.
