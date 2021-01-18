import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-widget',
  templateUrl: './newsletter-widget.component.html',
  styleUrls: ['./newsletter-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterWidgetComponent implements OnInit {
  @Input() color: string = '';
  newsletterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildNewsletterForm();
    console.log(this.color);
  }

  buildNewsletterForm() {
    this.newsletterForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
    });
  }

  submit() {
    if (!this.newsletterForm.valid) {
      return;
    }
    console.log(this.newsletterForm.value);
  }
}
