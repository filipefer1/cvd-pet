export const convertToNumericalString = (value: string): string => {
    return value?.replace(/[^\d]+/g, '') || '';
};
