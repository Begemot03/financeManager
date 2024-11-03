<script setup lang="ts">
import { categoryModel } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { computed } from 'vue';

const props = defineProps<{
	selected: CategoryType[];
}>();

const emits = defineEmits<{
	(e: 'update:selected', selected: CategoryType[]): void;
}>();

const categoryStore = categoryModel();
const categories = computed(() => categoryStore.categories);
</script>
<template>
	<Listbox
		:model-value="props.selected"
		@update:model-value="(v) => emits('update:selected', v)"
		:options="categories"
		option-label="name"
		checkmark
		multiple
		:highlight-on-select="true"
		class="w-full md:w-56"
	>
		<template #header>
			<span class="font-bold">Категории</span>
		</template>
	</Listbox>
</template>
