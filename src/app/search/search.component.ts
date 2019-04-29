import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Business} from '../shared/business.model';
import {BusinessService} from '../shared/services/business.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  categories = [{value: 'IT' , name: 'Information and Technology', icon: 'fa fa-desktop'},
    {value: 'Food', name: 'Restaurants, coffees and bars', icon: 'fa fa-coffee'},
    {value: 'Bank', name: 'Banks and financial institutions', icon: 'fa fa-university'},
    {value: 'Service', name: 'Services', icon: 'fa fa-university'},
    {value: 'Auto', name: 'Cars and accessories', icon: 'fa fa-car'},
    {value: 'Other', name: 'Other', icon : 'fa fa-university'}];
  name = '';
  category = '';
  businessList: Business[] ;
  filteredList = [];
  constructor(private route: ActivatedRoute,
              private businessService: BusinessService) {
    route.queryParams.subscribe((params) => {

      if (params.name) {
      this.name = params.name;
      }
      if (params.cat) {
      this.category = params.cat;
      }
    });
  }
  getBusiness() {
  }
  filter() {
    this.filteredList = this.businessList.filter((value) => {
      return (value.name.includes(this.name) && value.category.localeCompare(this.category));
    });
  }
  ngOnInit() {
    this.getBusiness();
  }


}
