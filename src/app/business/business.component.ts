import { Component, OnInit } from '@angular/core';
import {Business} from '../shared/business.model';
import {BusinessService} from '../shared/services/business.service';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../shared/review.model';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  public contacts = [{
    name: 'Terrance Orta',
    phone: '770-504-2217',
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
    isFavorite: false
  }, {
    name: 'Richard Mahoney',
    phone: '423-676-2869',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    isFavorite: true
  }, {
    name: 'Donna Price',
    phone: '859-496-2817',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    isFavorite: false
  }, {
    name: 'Lisa Landers',
    phone: '901-747-3428',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    isFavorite: false
  }, {
    name: 'Dorothy H. Spencer',
    phone: '573-394-9254',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    isFavorite: true
  }];
  mean: number;
  business = new Business();
  reviews = [];
  nb: number;
  constructor(private businessService: BusinessService,
              private route: ActivatedRoute) { }
  getBusiness() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('ena houni ' + id);
    this.businessService.getBusiness(id)
      .subscribe(business => {this.business = business;
                              });
    /*this.mean = this.business.calculateMean();*/
  }

   ngOnInit() {
    this.getBusiness();
    console.log(this.business);
    }

}
