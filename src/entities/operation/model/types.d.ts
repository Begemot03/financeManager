import type { Currency } from '@/shared/lib/currency';

export type OperationType = 'Доход' | 'Расход';

export type Operation = {
	id: number;
	depositeId: number;
	name: string;
	type: OperationType;
	sum: number;
	currency: Currency;
	creationDate?: Date;
	category: string;
	comment: string;
};
