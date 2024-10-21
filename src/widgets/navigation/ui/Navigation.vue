<script setup>
import { themeModel } from '@/entities/theme';
import { reactive, ref } from 'vue';

const themeStore = themeModel();

const routes = reactive([
	{
		name: 'Главная',
		to: '/',
	},
	{
		name: 'Финансы',
		to: '/finance',
	},
	{
		name: 'Счета',
		to: '/deposite',
	},
]);
</script>

<template>
	<v-navigation-drawer
		v-model="themeStore.navShow"
		location="left"
		app
		temporary
	>
		<v-list>
			<v-list-item
				v-for="({ name, to }, i) in routes"
				:key="i"
				:to="to"
				:title="name"
				link
			/>
		</v-list>
	</v-navigation-drawer>
</template>
