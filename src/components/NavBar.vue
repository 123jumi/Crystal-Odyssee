<script setup lang='ts'> 
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
<BNavbar>
    <BContainer></BContainer>
    <ul class>
        <li><a href=""></a>{{ t('message.nav.forfaits') }}</li>
        <li><img src="" alt=""></li>
        <li><a href=""></a>{{ t('message.nav.reserver') }}</li>
    </ul>
</BNavbar>
</template>

<style scoped>

</style>