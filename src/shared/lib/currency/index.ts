import { mdiCurrencyRub, mdiCurrencyUsd, mdiCurrencyEur } from "@mdi/js";

export const enum Currency {
    RUB = "RUB",
    USD = "USD",
    EUR = "EUR",
};

export const currencyIcon = {
    [Currency.RUB]: mdiCurrencyRub,
    [Currency.USD]: mdiCurrencyUsd,
    [Currency.EUR]: mdiCurrencyEur,
};

export const currencyList = ["RUB", "USD", "EUR"];