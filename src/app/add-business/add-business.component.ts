import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessService} from '../shared/services/business.service';
import {Business} from '../shared/business.model';


@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  categories = [{value: 'IT' , name: 'Information and Technology'},
    {value: 'Food', name: 'Restaurants, coffees and bars'},
    {value: 'Bank', name: 'Banks and financial institutions'},
    {value: 'Service', name: 'Services'},
    {value: 'Auto', name: 'Cars and accessories'},
    {value: 'Other', name: 'Other'}];
  addBusinessForm: FormGroup;
  submitted = false;
  fileData: File;
  constructor(private fb: FormBuilder,
              private businessService: BusinessService) { }
  ngOnInit() {
      this.addBusinessForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
        phone_number: ['', Validators.required],
      category: ['', Validators.required]
    });
  }
  fileProgress(fileInput: any) {
    this.fileData =  fileInput.target.files[0] as File;
    console.log(this.fileData);
  }
  addBusiness(value) {
    if (!value) { return; }
    console.log(value);
    this.businessService.addBusiness(value)
      .subscribe(res => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(res));
        this.addBusinessForm.reset();
      });

  }
  get f() { return this.addBusinessForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.addBusinessForm);
    if (this.addBusinessForm.invalid) {
      return;
    }
    this.submitted = false;
    this.addBusiness(this.addBusinessForm.value);

  }

}
