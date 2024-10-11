<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { newDepositeModalModel } from '../model';
import { AddDeposite, addDepositeModel } from '@/features/addDeposite';
import type { Deposite } from '@/entities/deposite';

const addDepositeStore = addDepositeModel();
const newDepositeModalStore = newDepositeModalModel();

const submit = newDepositeModalStore.handleSubmit(async (values) => {
    await addDepositeStore.addDeposite(values as Deposite);
    newDepositeModalStore.handleReset();
    newDepositeModalStore.close();
});
</script>

<template>
    <BaseModal
        v-model:visible="newDepositeModalStore.visible"
        title="Новый счет"
        :persistent="true"
    >
        <template #activator>
            <v-btn
                @click="newDepositeModalStore.open"
                text="Создание счета"
            ></v-btn>
        </template>
        <v-form
            ref="form"
            @submit.prevent="submit"
        >
            <v-card
                title="Новый счет"
                rounded
            >
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12">
                            <v-text-field
                                v-model="newDepositeModalStore.name.value"
                                :error-messages="newDepositeModalStore.name.errorMessage"
                                label="Название счета"
                                variant="outlined"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field
                                v-model="newDepositeModalStore.startBalance.value"
                                :error-messages="newDepositeModalStore.startBalance.errorMessage"
                                label="Начальный баланс"
                                variant="outlined"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-select
                                v-model="newDepositeModalStore.currency.value as string"
                                :error-messages="newDepositeModalStore.currency.errorMessage"
                                :items="['RUB', 'USD']"
                                label="Валюта"
                                variant="outlined"
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-select
                                v-model="newDepositeModalStore.type.value as string"
                                :error-messages="newDepositeModalStore.type.errorMessage"
                                :items="['Наличные', 'Кредитка']"
                                label="Тип счета"
                                variant="outlined"
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                v-model="newDepositeModalStore.comment.value"
                                label="Комментарий"
                                variant="outlined"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <AddDeposite
                        variant="tonal"
                        color="blue"
                        type="submit"
                    >Добавить</AddDeposite>
                    <v-btn
                        text="Отмена"
                        variant="tonal"
                        @click="newDepositeModalStore.close"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </BaseModal>
</template>
