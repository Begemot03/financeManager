<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { newOperationModalModel } from '../model';
import { AddOperation, AddOperationModel } from '@/features/addOperation';

const newOperationModalStore = newOperationModalModel();
const addOperationStore = AddOperationModel();

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
                text="Открыть"
            ></v-btn>
        </template>
        <template #actions>
            <v-btn
                @click="newOperationModalStore.close"
                text="Закрыть"
            ></v-btn>
        </template>
        <v-form>
            <v-card
                title="Новая операция"
            >
                <v-card-text>
                    <v-row dense>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                v-model.trim="newOperationModalStore.newOperation.name"
                                label="Название операции"
                                variant="outlined"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="6"
                        >
                            <v-text-field
                                v-model.number="newOperationModalStore.newOperation.sum"
                                label="Сумма операции"
                                variant="outlined"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="6"
                        >
                            <v-select
                                v-model="newOperationModalStore.newOperation.depositeId"
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
                                v-model="newOperationModalStore.newOperation.currency"
                                label="Валюта"
                                variant="outlined"
                                :items="['RUB', 'USD']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                v-model="newOperationModalStore.newOperation.type"
                                label="Тип операции"
                                variant="outlined"
                                :items="['Доход', 'Расход']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                v-model="newOperationModalStore.newOperation.category"
                                label="Категория"
                                variant="outlined"
                                :items="['Еда', 'Развлечения']"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-textarea
                                v-model="newOperationModalStore.newOperation.comment"
                                label="Комментарий"
                                variant="outlined"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <AddOperation
                        @click="addOperationStore.addOperation(newOperationModalStore.newOperation)"
                        variant="tonal"
                        color="blue"
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