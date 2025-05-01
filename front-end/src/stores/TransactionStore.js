import {defineStore} from "pinia";
import * as yup from "yup";
import {useForm} from "vee-validate";
import TransactionsService from "@/services/TransactionsService";
import {formatDateToIsoString} from "@/utils/dateUtils";

const schema = yup.object({
    name: yup.string().required().label("Name"),
    description: yup.string().optional().label("Description"),
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

    const validateAndSave = async () => {
        const { valid } = await validate();
        if (valid) {
            setFieldValue("date", formatDateToIsoString(values.date))
            return saveTransaction(values)
        }
    }

    const saveTransaction = (transaction) => {
        return TransactionsService.saveTransaction(transaction).catch((error) => {
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
        validateAndSave,
        saveTransaction,
        syncTypeWithAmount,
        syncAmountWithType
    }
});

