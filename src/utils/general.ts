export const getMinimunNumberOfMove = (discsNumbers: number) => {
    return Math.pow(2, discsNumbers) - 1;
};
