export class Transaction {

  public price: number;
  public place: string;
  public imgName: string;
  public navFunction: string;

  constructor(price: number, place: string, img: string, nav: string) {
    this.price = price;
    this.place = place;
    this.imgName = img;
    this.navFunction = nav;
  }



}