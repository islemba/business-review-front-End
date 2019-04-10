import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessService} from '../services/business.service';


@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  categories = [{id: 1 , name: 'IT'}, {id: 2, name: 'food'}, {id: 3, name: 'bank'}];
  addBusinessForm: FormGroup;
  submitted = false;
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
  addBusiness(value) {
    if (!value) { return; }
    // @ts-ignore
    this.businessService.addBusiness({ value} as Business)
      .subscribe(business => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(business));
        this.addBusinessForm.reset();
      });
  }
  get f() { return this.addBusinessForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.addBusinessForm);
    if (this.addBusinessForm.invalid) {
      this.submitted = false;
      return;
    }
    this.submitted = false;
    this.addBusiness(this.addBusinessForm.value);

  }

}
