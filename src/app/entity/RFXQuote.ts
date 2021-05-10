export class RFXQuote {
    id: string | undefined;
    symbol: string | undefined;
    tenor: string | undefined;
    price: number | undefined;
    pxStr: string | undefined;
    createdTime: number | undefined;

    constructor(id: string, symbol: string, tenor: string, price: number, pxStr: string, createdTime: number) {
        this.id = id;
        this.symbol = symbol;
        this.tenor = tenor;
        this.price = price;
        this.pxStr = pxStr;
        this.createdTime = createdTime;
    }
  }