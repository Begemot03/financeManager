import { uuid } from '@/shared/lib/uuid';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export type CategoryType = {
	id: number;
	name: string;
};

export const useCategoryStore = defineStore('category', () => {
	const categories = reactive<CategoryType[]>([
		{
			id: uuid(),
			name: 'Еда',
		},
		{
			id: uuid(),
			name: 'Дом',
		},
	]);

	return {
		categories,
	};
});
