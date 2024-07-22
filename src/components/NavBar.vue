<script setup lang='ts'> 
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
<BNavbar>
        <BNavItem><a href=""></a>{{ t('message.nav.forfaits') }}</BNavItem>
        <BNavItem><img src="" alt=""></BNavItem>
        <BNavItem><a href=""></a>{{ t('message.nav.reserver') }}</BNavItem>
</BNavbar>
</template>

<style scoped>

</style>