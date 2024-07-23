<script setup lang='ts'>
import LogoHolder from './LogoHolder.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <BNavbar class="navbar p-0" type="dark" variant="dark">
    <BNavbarNav class="w-100 d-flex justify-content-between align-items-center p-0">
      <BNavItem class="down p-2" href="#">{{ t('message.nav.forfaits') }}</BNavItem>
      <LogoHolder> </LogoHolder>
      <BNavItem class="down p-2" href="#">{{ t('message.nav.reserver') }}</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>


<style lang="sass" scoped>
.down
  margin-bottom: 2rem
@media screen and (max-width: 730px)
  .down
    margin-bottom: 1rem
</style>
