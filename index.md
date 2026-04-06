# Getting Started

Welcome to the Bloxbind documentation where we will go over how to setup and configure Bloxbind for your community.

Firstly, you will need to invite the bot to your discord server which can be done [here](https://discord.com/oauth2/authorize?client_id=1126292255930601482)!

## Beginning Setup

Run the `/setup` command with our bot to help you configure Bloxbind.

The setup command will prompt for:

- Verification Role: the role to assign to verified users (must be below the bot's role).
- Verification Channel: the channel where the verification message will be posted (you can mention the channel or provide its ID).

The verification channel is where the initial message for verification will be posted.
The verification role is the role that will be assigned to users who are verified.

### Example Setup Command

```
/setup verification_role:@Verified verification_channel:#rules
```

## Required permissions & notes

- Ensure the bot's role is above the verification role in Server Settings → Roles.
- Make sure the bot has Manage Roles permission to assign the verification role.
- If slash commands don't appear, re-invite the bot with applications.commands scope or contact support.

## Troubleshooting

- If the bot is not responding, ensure it is online and has the "View Channels" and "Send Messages" permissions in the target channel.
- If the bot cannot assign the verification role, make sure the bot's role is higher than the verification role in the server's role list.
- If issues persist, try reinviting the bot or check for any permission overrides in channel settings.

If you need more help, feel free to join our [discord](https://discord.bloxbind.com) for support!