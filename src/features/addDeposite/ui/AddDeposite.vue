<script setup lang="ts">
import { shallowRef, ref } from 'vue';
import { addDepositeModel } from '../model';
import { currencyList } from '@/shared/lib/currency';
import { depositeModel } from '@/entities/deposite';

const isVisible = shallowRef(false);
const addDepositeStore = addDepositeModel();
const depositeStore = depositeModel();
const form = ref();

const requiredInputRule: Array<(v: any) => boolean | string> = [
    v => (!!v && v.length > 0) || "Обязательное поле",
];

const startBalanceValidateRule: Array<(v: any) => boolean | string> = [
    ...requiredInputRule,
    v => (v >= 0) || "Начальный баланс не может быть отрицательным числом",
];

async function createBtnHandler() {
    const { valid } = await form.value.validate();

    if(!valid) return;

    depositeStore.addDeposite(addDepositeStore.deposite);
    addDepositeStore.reset();
    isVisible.value = false;
}

</script>

<template>
    <v-dialog
        v-model="isVisible"
        max-width="600"
        persistent
    >
        <template #activator="{ props: activatorProps }">
            <v-btn
                v-bind="activatorProps"
                text="Создание счета"
            ></v-btn>
        </template>
        <v-form
            ref="form"
            @submit.prevent
        >
            <v-card
                title="Новый счет"
                rounded
            >
                <v-card-text>
                    <v-row dense>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                                label="Название счета"
                                v-model="addDepositeStore.deposite.name"
                                variant="outlined"
                                :rules="requiredInputRule"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="8"
                        >
                            <v-text-field
                                label="Начальный баланс"
                                v-model="addDepositeStore.deposite.startBalance"
                                variant="outlined"
                                :rules="startBalanceValidateRule"
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="4"
                        >
                            <v-select
                                label="Валюта"
                                variant="outlined"
                                :items="currencyList"
                                v-model="addDepositeStore.deposite.currency"
                                :rules="requiredInputRule"
                                ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-textarea
                                label="Комментарий"
                                variant="outlined"
                                v-model="addDepositeStore.deposite.comment"
                            >

                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        text="Добавить"
                        variant="tonal"
                        color="blue"
                        type="submit"
                        @click="createBtnHandler"
                    ></v-btn>
                    <v-btn
                        text="Отмена"
                        variant="tonal"
                        @click="isVisible = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<style scoped>
    
</style>