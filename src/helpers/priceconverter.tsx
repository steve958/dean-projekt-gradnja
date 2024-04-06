export const priceConverter = (price: number) => {
    return price
        .toString()
        .slice(0, price.toString().length - 3)
        .concat(`.${price.toString().slice(-3)}`)
};
