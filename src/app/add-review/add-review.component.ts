import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ReviewService} from '../shared/services/review.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private reviewService: ReviewService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  @Input() business_id: string;
  rating = 0 ;
  vis = false;
  success: boolean;
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
        this.success = true ;
        this.form.reset();
      });
  }
  removeAlert() {
    this.success = false;
  }
  onSubmit() {

    this.addReview(Object.assign(this.form.value, {business_id: this.business_id}));
    console.log('Submitted value:', Object.assign(this.form.value, {business_id: this.business_id}));
  }

}
