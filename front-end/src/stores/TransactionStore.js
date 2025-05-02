import {defineStore} from "pinia";
import * as yup from "yup";
import {useForm} from "vee-validate";
import TransactionsService from "@/services/TransactionsService";
import {formatDateToIsoString} from "@/utils/dateUtils";

const schema = yup.object({
    name: yup.string().required().label("Name"),
    description: yup.string().nullable().label("Description"),
    amount: yup.number().required().notOneOf([0],"Amount can't be 0").label("Amount"),
    type: yup.string().required().label("Type"),
    date: yup.date().required().max(new Date(),"Date can't be in the future").label("Date")
});

export const useTransactionStore = defineStore("transaction", () => {
    const {errors, errorBag, defineField, resetForm, validate, setFieldValue, values} = useForm({
        validationSchema: schema,
        initialValues: {type: "EXPENSE"}
    });

    const [name] = defineField("name");
    const [description] = defineField("description");
    const [amount] = defineField("amount");
    const [type] = defineField("type");
    const [date] = defineField("date");

    const initForm = (transaction) => {
        Object.keys(transaction).forEach((field) => {
            setFieldValue(field,transaction[field]);
        })
    }

    const validateAndSave = async () => {
        const { valid } = await validate();

        if (valid) {
            setFieldValue("date", formatDateToIsoString(values.date))
            console.log(values)
            return values.id ? updateTransaction(values) : saveTransaction(values);
        }
    }

    const saveTransaction = (transaction) => {
        return TransactionsService.saveTransaction(transaction).catch((error) => {
            console.error(error);
        })
    }

    const updateTransaction = (transaction) => {
        return TransactionsService.updateTransaction(transaction).catch((error) => {
            console.error(error);
        })
    }

    const deleteTransaction = (id) => {
        return TransactionsService.deleteTransaction(id).catch((error) => {
            console.error(error);
        })
    }

    const syncTypeWithAmount = (value) => {
        value < 0 ? setFieldValue("type","EXPENSE") : setFieldValue("type","INCOME");
    };

    const syncAmountWithType = (value) => {
        if (!values.amount) return;
        const absVal = Math.abs(values.amount);
        value === "EXPENSE" ? setFieldValue("amount",-absVal) : setFieldValue("amount",absVal);
    }

    return {
        name,
        description,
        amount,
        type,
        date,
        errors,
        errorBag,
        resetForm,
        initForm,
        validateAndSave,
        saveTransaction,
        updateTransaction,
        deleteTransaction,
        syncTypeWithAmount,
        syncAmountWithType
    }
});

