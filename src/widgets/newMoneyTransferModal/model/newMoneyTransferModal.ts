import { depositeModel } from '@/entities/deposite';
import { defineStore } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { computed, ref } from 'vue';

export const useNewMoneyTransferModal = defineStore(
	'newMoneyTransferModal',
	() => {
		const visible = ref<boolean>(false);
		const depositeStore = depositeModel();
		const listOfDeposites = computed<Array<{ name: string; id: number }>>(() =>
			depositeStore.deposites.map((deposite) => ({
				name: deposite.name,
				id: deposite.id,
			}))
		);

		const { handleSubmit, handleReset } = useForm({
			initialValues: {},
			validationSchema: {
				sum(value: number) {
					if (value > 0) return true;
					return 'Введите число больше 0';
				},
				depositeFrom(value: number) {
					if (listOfDeposites.value.find((deposite) => deposite.id === value))
						return true;
					return 'Выберите депозит из списка.';
				},
				depositeTo(value: number) {
					if (listOfDeposites.value.find((deposite) => deposite.id === value))
						return true;
					return 'Выберите депозит из списка.';
				},
			},
		});

		const sum = useField<number>('sum');
		const depositeFrom = useField<number>('depositeFrom');
		const depositeTo = useField<number>('depositeTo');

		function open() {
			visible.value = true;
		}

		function close() {
			visible.value = false;
		}

		return {
			sum,
			depositeFrom,
			depositeTo,
			handleReset,
			handleSubmit,
			listOfDeposites,
			visible,
			open,
			close,
		};
	}
);
