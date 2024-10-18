<script setup lang="ts">
import { themeModel } from '@/entities/theme';

const themeStore = themeModel();
</script>
<template>
	<v-app-bar app>
		<template #prepend>
			<v-app-bar-nav-icon variant="text" @click.stop="themeStore.toogleNavShow"></v-app-bar-nav-icon>
		</template>
	</v-app-bar>
</template>
