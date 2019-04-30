import { Component, OnInit } from '@angular/core';
import {Business} from '../shared/business.model';
import {BusinessService} from '../shared/services/business.service';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../shared/review.model';
import {delay} from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  similar = [];
  mean = 0;
  business = new Business();
  reviews = [] as Review[];
  star = [];
  constructor(private businessService: BusinessService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }
  getBusiness() {
     this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.businessService.getBusiness(id)
         .subscribe(business => {this.business = business;
                                 this.reviews = business.reviews;
                                 this.mean = this.calculateMean();
                                 this.getsimilar(business.category);
                                 for (let i = 0; i < 5 ; i++) {
                                   this.star[i] = this.filter(i + 1).toFixed(2);
                                 }
         });
    });
  }
  filter(num) {
    if (this.reviews.length === 0) { return 0; }
    let filtered = [];
    filtered = this.reviews.filter(value => value.stars === num.toString());
    return (filtered.length / this.reviews.length) * 100;
  }
  calculateMean() {
      if (this.reviews.length === 0) { return 0; }
      let somme = 0;
      for (const review of this.reviews) {
      somme += Number(review.stars);
    }

      console.log(somme);
      return (somme / this.reviews.length);

  }
  getsimilar(category) {
  this.businessService.searchBusinessbyCategory(category)
    .subscribe(bus => {this.similar = bus;
                       this.similar = this.similar.filter(value => {
      return !(value.id === this.business.id);
    }); });
  }
   ngOnInit() {
    this.getBusiness();
    console.log(this.business);
    }

}
