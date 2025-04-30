export const DATE_FORMAT = "dd/mm/yy";

export const getMonthPeriod = (date) => {
    if (!date) return null;
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {startDate: firstDayOfMonth, endDate: lastDayOfMonth};
};

export const getMonthName = (date) => {
    return  date.toLocaleString('default', { month: 'long' });
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('default', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}