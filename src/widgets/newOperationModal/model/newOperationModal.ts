import { depositeModel } from '@/entities/deposite';
import { defineStore } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { computed, ref } from 'vue';

export const useNewOperationModal = defineStore('newOperationModal', () => {
	const depositeStore = depositeModel();
	const listOfDeposites = computed<Array<{ name: string; id: number }>>(() =>
		depositeStore.deposites.map((deposite) => ({
			name: deposite.name,
			id: deposite.id,
		}))
	);

	const { handleSubmit, handleReset } = useForm({
		initialValues: {
			name: '',
			type: 'Доход',
			sum: 0,
			category: 'Еда',
			comment: '',
			date: new Date(),
		},
		validationSchema: {
			name(value: string) {
				if (value && value.length > 0) return true;
				return 'Введите название операции.';
			},
			depositeId(value: number) {
				if (listOfDeposites.value.find((deposite) => deposite.id === value))
					return true;
				return 'Выберите депозит из списка.';
			},
			type(value: string) {
				if (value === 'Доход' || value === 'Расход') return true;
				return 'Выберите тип операции из списка.';
			},
			sum(value: number) {
				if (value >= 0) return true;
				return 'Сумма операции не может быть отрицательными числом';
			},
			category(value: string) {
				if (value) return true;
				return 'Выберите категорию из списка.';
			},
		},
	});

	const name = useField<string>('name');
	const depositeId = useField<number>('depositeId');
	const type = useField<string>('type');
	const sum = useField<number>('sum');
	const category = useField<string>('category');
	const comment = useField<string>('comment');
	const date = useField<Date>('date');

	const visible = ref(false);

	function close() {
		visible.value = false;
	}

	function open() {
		visible.value = true;
	}

	return {
		name,
		depositeId,
		type,
		sum,
		category,
		date,
		comment,
		listOfDeposites,
		visible,
		close,
		open,
		handleSubmit,
		handleReset,
	};
});
