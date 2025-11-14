# Settings

In Bloxbind 1.1.0 additional settings were added to enable more features and customization.

## Options

Currently two main setting groups exist: Auto Verification and Naming Scheme.

### Auto Verification

- Automatic verification will verify users automatically when they join the server (if enabled).
- When enabled the bot will assign the configured verification role and optionally rename the user (see [Naming Scheme](/settings/#naming-scheme)).

### Naming Scheme

- The naming scheme currently supports a fixed set of options
  - Varibles:
    - {RobloxUsername}
    - {RobloxDisplay}
      - {DiscordUsername}
  - Symbols:
    - @
    - \#
    - |
    - ( )
    - " "
    - ' '
    - < >

### Example

![Naming Scheme Example](https://cdn.bocon.wtf/u/UYELwMxJ.png)

### Notes & limits

- Discord nickname max length: 32 characters. Long generated names may be truncated or rejected.
- To change or view these settings use the dashboard on our website.
