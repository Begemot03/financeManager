<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { newOperationModalModel } from '../model';
import { AddOperation, addOperationModel } from '@/features/addOperation';
import type { Operation } from '@/entities/operation';

const newOperationModalStore = newOperationModalModel();
const addOperationStore = addOperationModel();

const submit = newOperationModalStore.handleSubmit(async (values) => {
    console.log(1)
    await addOperationStore.addOperation(values as Operation);
    newOperationModalStore.handleReset();
    newOperationModalStore.close();
});

</script>

<template>
    <BaseModal
        v-model:visible="newOperationModalStore.visible"
        title="Новая операция"
        :persistent="false"
    >
        <template #activator>
            <v-btn
                @click="newOperationModalStore.open"
                text="Новая операция"
            ></v-btn>
        </template>
        <v-form
            @submit.prevent="submit"
        >
            <v-card
                title="Новая операция"
            >
                <v-card-text>
                    <v-row dense>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                v-model.trim="newOperationModalStore.name.value"
                                :error-messages="newOperationModalStore.name.errorMessage"
                                label="Название операции"
                                variant="outlined"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="6"
                        >
                            <v-text-field
                                v-model.number="newOperationModalStore.sum.value"
                                :error-messages="newOperationModalStore.sum.errorMessage"
                                label="Сумма операции"
                                variant="outlined"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="6"
                        >
                            <v-select
                                v-model="newOperationModalStore.depositeId.value"
                                :error-messages="newOperationModalStore.depositeId.errorMessage"
                                label="Счет списания"
                                variant="outlined"
                                :items="newOperationModalStore.listOfDeposites"
                                item-title="name"
                                item-value="id"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                v-model="newOperationModalStore.currency.value"
                                :error-messages="newOperationModalStore.currency.errorMessage"
                                label="Валюта"
                                variant="outlined"
                                :items="['RUB', 'USD']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                v-model="newOperationModalStore.type.value"
                                :error-messages="newOperationModalStore.type.errorMessage"
                                label="Тип операции"
                                variant="outlined"
                                :items="['Доход', 'Расход']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                v-model="newOperationModalStore.category.value"
                                :error-messages="newOperationModalStore.category.errorMessage"
                                label="Категория"
                                variant="outlined"
                                :items="['Еда', 'Развлечения']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-textarea
                                v-model.trim="newOperationModalStore.comment.value"
                                label="Комментарий"
                                variant="outlined"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <AddOperation
                        variant="tonal"
                        color="blue"
                        type="submit"
                    >Добавить</AddOperation>
                    <v-btn
                        @click="newOperationModalStore.close"
                        variant="tonal"
                        text="Закрыть"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </BaseModal>
</template>