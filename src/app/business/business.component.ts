import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business;
  constructor(private businessService: BusinessService) { }
  getBusiness(id: number): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.businessService.getBusniss(id)
      .subscribe(business => this.business = business);
  }

    ngOnInit() {

  }

}
