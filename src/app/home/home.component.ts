import {Component, OnInit, ViewChild} from '@angular/core';
import {BusinessService} from '../shared/services/business.service';
import {Business} from '../shared/business.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [{value: 'IT' , name: 'Information and Technology', icon: 'fa fa-desktop'},
    {value: 'Food', name: 'Restaurants, coffees and bars', icon: 'fa fa-coffee'},
    {value: 'Bank', name: 'Banks and financial institutions', icon: 'fa fa-university'},
    {value: 'Service', name: 'Services', icon: 'fa fa-university'},
    {value: 'Auto', name: 'Cars and accessories', icon: 'fa fa-car'},
    {value: 'Other', name: 'Other', icon : 'fa fa-university'}];
  name = '';
  businessList: Business[];
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
  }
}
