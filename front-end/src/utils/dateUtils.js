import {DateTime} from "luxon";

export const DATE_FORMAT = "dd/mm/yy";

export const getMonthPeriod = (date) => {
    const firstDayOfMonth = DateTime.fromJSDate(date).startOf("month").toISO({includeOffset: false});
    const lastDayOfMonth = DateTime.fromJSDate(date).endOf("month").toISO({includeOffset: false});
    return {startDate: firstDayOfMonth, endDate: lastDayOfMonth};
};

export const getMonthName = (date) => {
    return DateTime.fromJSDate(date).toLocaleString({ month: 'long' });
};

export const formatStringToIso = (date) => {
    return DateTime.fromISO(date).toLocaleString();
}

export const formatDateToIsoString = (date) => {
    if (typeof date === "string") {
        return date;
    }
    return DateTime.fromJSDate(date).toISO({includeOffset: false});
}