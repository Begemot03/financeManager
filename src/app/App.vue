<script setup lang="ts">
import Notification from '@/shared/ui/notification/ui/Notification.vue';
import { Navigation } from '@/widgets/navigation';

</script>

<template>
	<Navigation />
	<RouterView />
	<Notification />
</template>

<style scoped>

</style>
