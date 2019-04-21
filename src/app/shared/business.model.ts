import {Review} from './review.model';

export class Business {
  id: string;
  name: string;
  category: string;
  phone_number: string;
  address: string;
  logo: string;
  reviews: Review[];
  calculateMean(): number {
    if (this.reviews.length === 0) {return 0; }
    let somme;
    for (const review of this.reviews) {
      somme += review.stars;
    }
    return somme / this.reviews.length;
  }
}

