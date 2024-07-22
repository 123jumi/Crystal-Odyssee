<script setup lang='ts'> 
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
<BNavbar>
        <BNavItem href="">{{ t('message.nav.forfaits') }}</BNavItem>
        <BNavbarBrand><img src="" alt=""></BNavbarBrand>
        <BNavItem href="">{{ t('message.nav.reserver') }}</BNavItem>
</BNavbar>
</template>

<style scoped>

</style>