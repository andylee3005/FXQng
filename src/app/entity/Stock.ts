
export class Stock {
    id: string | undefined;
    spotId: string | undefined;
    symbol: string | undefined;
    currency: string | undefined;
    volume: string | undefined;
    price: number | undefined;
    currPrice: string | undefined;
    timePurchased: string | undefined;
    timeDate: number | undefined;

    constructor(spotId: string, symbol: string, currency: string, volume: string, price: number) {
        this.spotId = spotId;
        this.symbol = symbol;
        this.currency = currency;
        this.volume = volume;
        this.price = price;
    }
}