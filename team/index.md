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
    avatar: 'https://cdn.discordapp.com/avatars/714860155183038495/dd8debea94188edb4708069d0ae3b560.webp?size=512',
    name: 'Bocon',
    title: 'Project Lead, Back-end, Hosting',
    links: [
      { icon: 'github', link: 'https://github.com/Bocon778' },
      { icon: 'discord', link: 'https://discord.com/users/714860155183038495' },
      { icon: 'roblox', link: 'https://www.roblox.com/users/562130905/profile'}
    ]
  },
    {
    avatar: 'https://cdn.discordapp.com/avatars/700425671146471435/5eae136eb229019a9e18d6277859d4da.webp?size=512',
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