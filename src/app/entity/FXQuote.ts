import {FXSpot} from './FXSpot';

export class FXQuote {
  id: number | undefined;
  symbol: string | undefined;
  tenor: string | undefined;
  fxSpot: FXSpot | undefined;

}
