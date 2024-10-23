<script setup lang="ts">
import { DefaultLayout } from '@/shared/ui/layouts';
import { SideBar } from '@/widgets/sideBar';
import { TopBar } from '@/widgets/topBar';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<template>
	<component :is="layout">
		<template #header>
			<TopBar />
		</template>
		<template #navigation>
			<SideBar />
		</template>
		<template #default>
			<RouterView />
		</template>
	</component>
	<Toast />
</template>
