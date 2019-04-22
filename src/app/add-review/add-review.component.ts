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
  rating = 0 ;
  vis = false;
  form = new FormGroup({
    stars: new FormControl(''),
    reviewer_name: new FormControl(''),
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

    this.addReview(Object.assign(this.form.value, {business_id: this.business_id}));
    console.log('Submitted value:', Object.assign(this.form.value, {business_id: this.business_id}));
  }
  visible() {
    this.vis = true;
  }
}
