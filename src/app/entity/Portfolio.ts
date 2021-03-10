import { Stock } from "./Stock";

export class Portfolio {
    id: string;
    clientId: string;
    pName: string;
    currency: string;
    updated: string;
    stocks: Stock[];

    constructor(clientId: string, pName: string, currency: string) {
      this.clientId = clientId;
      this.pName = pName;
      this.currency = currency;
    }
  }