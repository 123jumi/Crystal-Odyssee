<script setup lang='ts'>
import LogoHolder from './LogoHolder.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <BNavbar class="navbar" type="dark" variant="dark">
    <BNavbarNav class="w-100 d-flex justify-content-between align-items-center">
      <BNavItem href="#">{{ t('message.nav.forfaits') }}</BNavItem>
      <LogoHolder> </LogoHolder>
      <BNavItem href="#">{{ t('message.nav.reserver') }}</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>


<style lang="sass" scoped>
</style>
