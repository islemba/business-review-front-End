import {Review} from './review.model';

export class Business {
  id: string;
  name: string;
  category: string;
  phone_number: string;
  address: string;
  logo: string;
  reviews: Review[];

}

