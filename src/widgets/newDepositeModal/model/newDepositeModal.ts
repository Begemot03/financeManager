import { defineStore } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';

export const useNewDepositeModal = defineStore('newDepositeModal', () => {
	const { handleSubmit, handleReset } = useForm({
		initialValues: {
			name: '',
			startBalance: 0,
			comment: '',
		},
		validationSchema: {
			name(value: string) {
				if (value) return true;
				return 'Выберите имя счета.';
			},
			startBalance(value: number) {
				if (value >= 0) return true;
				return 'Начальный баланс не может быть отрицательным.';
			},
		},
	});

	const name = useField<string>('name');
	const startBalance = useField<number>('startBalance');
	const comment = useField<string>('comment');

	const visible = ref(false);

	function open() {
		visible.value = true;
	}

	function close() {
		visible.value = false;
	}

	return {
		name,
		startBalance,
		comment,
		handleSubmit,
		handleReset,
		visible,
		open,
		close,
	};
});
