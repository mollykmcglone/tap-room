export class Keg {
  public cheap: boolean;
  public strong: boolean;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public pintsRemaining: number){

  }
}
