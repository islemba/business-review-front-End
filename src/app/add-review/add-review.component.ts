import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ReviewService} from '../shared/services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private reviewService: ReviewService) {
  }

  @Input() business_id: string;
  rating ;
  form = new FormGroup({
    ratingInput: new FormControl(''),
    name: new FormControl(''),
    comment : new FormControl('')
  });
  ngOnInit() {
  }
  addReview(value) {
    if (!value) { return; }
    this.reviewService.addReview(value)
      .subscribe(res => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(res));
      });
  }
  onSubmit() {

    /*this.addReview(Object.assign(this.form.value, {id: this.business_id}));*/
    console.log('Submitted value:', Object.assign(this.form.value, {id: this.business_id}));
  }
  visible() {
    return(this.rating !== 0);
  }
}
