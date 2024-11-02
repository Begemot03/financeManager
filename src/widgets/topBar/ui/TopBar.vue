<script setup>
import { ref } from 'vue';

const home = ref({
	icon: 'pi pi-home',
});



const path = ref([
	{ label: 'Статистика' },
	{ label: 'Отчеты' },
	{ label: 'За последний месяц' },
]);
</script>

<template>
	<div class="card">
		<Toolbar>
			<template #start>
				<Breadcrumb
					:home="home"
					:model="path"
				>
					<template #separator> /</template>
				</Breadcrumb>
			</template>
			<template #end>
				<div class="flex gap-4 items-center">
					<IconField>
						<InputIcon class="pi pi-search" />
						<InputText placeholder="Search"> </InputText>
					</IconField>
					<a
						v-ripple
						class="p-2 rounded-full"
					>
						<i class="pi pi-moon"></i>
					</a>
					<a
						v-ripple
						class="p-2 rounded-full"
					>
						<i class="pi pi-bell"></i>
					</a>
				</div>
			</template>
		</Toolbar>
	</div>
</template>
