import { depositeModel } from '@/entities/deposite';
import { Currency } from '@/shared/lib/currency';
import { defineStore } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { computed, ref } from 'vue';

export const useNewOperationModal = defineStore('newOperationModal', () => {
	const depositeStore = depositeModel();
	const listOfDeposites = computed<Array<{ name: string; id: number }>>(() =>
		depositeStore.deposites.map((deposite) => ({
			name: deposite.name,
			id: deposite.id
		}))
	);

	const { handleSubmit, handleReset } = useForm({
		initialValues: {
			name: '',
			type: 'Доход',
			sum: 0,
			currency: Currency.RUB,
			category: 'Еда',
			comment: ''
		},
		validationSchema: {
			name(value: string) {
				if (value) return true;
				return 'Введите название операции.';
			},
			depositeId(value: number) {
				if (listOfDeposites.value.find((deposite) => deposite.id === value))
					return true;
				return 'Выберите депозит из списка.';
			},
			type(value: string) {
				if (value === 'Доход' || value === 'Доход') return true;
				return 'Выберите тип операции из списка.';
			},
			sum(value: number) {
				if (value >= 0) return true;
				return 'Сумма операции не может быть отрицательными числом';
			},
			currency(value: string) {
				if (value === Currency.RUB || value === Currency.USD) return true;
				return 'Выберите валюту из списка.';
			},
			category(value: string) {
				if (category) return true;
				return 'Выберите категорию из списка.';
			}
		}
	});

	const name = useField<string>('name');
	const depositeId = useField<number>('depositeId');
	const type = useField<string>('type');
	const sum = useField<number>('sum');
	const currency = useField<string>('currency');
	const category = useField<string>('category');
	const comment = useField<string>('comment');

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
		currency,
		category,
		comment,
		listOfDeposites,
		visible,
		close,
		open,
		handleSubmit,
		handleReset
	};
});
