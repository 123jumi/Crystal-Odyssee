<script setup lang='ts'> 
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
<BNavbar toggleable="xl" variant="primary" v-b-color-mode="'dark'">
  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <BNavItem href="#">{{ t('message.nav.forfaits') }}</BNavItem>
      <BAvatar size="md" src="https://picsum.photos/200/300" />
      <BNavItem href="#">{{ t('message.nav.reserver') }}</BNavItem>
    </BNavbarNav>
  </BCollapse>
</BNavbar>
</template>

<style scoped>

</style>