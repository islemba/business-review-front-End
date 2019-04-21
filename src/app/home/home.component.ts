import {Component, OnInit, ViewChild} from '@angular/core';
import {BusinessService} from '../shared/services/business.service';
import {Business} from '../shared/business.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = '';
  businessList: Business[];
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('click' + this.name);
    this.businessService.searchBusiness(this.name)
      .subscribe( res => {
          this.businessList = res;
        }
      );
  }

}
