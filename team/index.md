---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/714860155183038495/d39ea26f96e725a4f1b537b3c9faa289.webp?size=512',
    name: 'Bocon',
    title: 'Project Lead, Back-end, Hosting',
    links: [
      { icon: 'github', link: 'https://github.com/Bocon778' },
      { icon: 'discord', link: 'https://discord.com/users/714860155183038495' },
      { icon: 'roblox', link: 'https://www.roblox.com/users/562130905/profile'}
    ]
  },
    {
    avatar: 'https://cdn.discordapp.com/avatars/700425671146471435/777ec24f6f283a7cde9322cf5358db39.webp?size=512',
    name: 'Noobyguy775',
    title: 'Front-end, Design',
    links: [
      { icon: 'github', link: 'https://github.com/Noobyguy775' },
      { icon: 'roblox', link: 'https://www.roblox.com/users/94066698/profile' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Bloxbind Team
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
