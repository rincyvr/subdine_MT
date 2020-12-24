import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rc-email',
  templateUrl: './rc-email.component.html',
  styleUrls: ['./rc-email.component.scss']
})
export class RcEmailComponent implements OnInit {
  @Input() myFormGroup: FormGroup;
  @Input() myFormName: string;
  @Output() onGettingEmail = new EventEmitter<any>();

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.myFormName === undefined) {
      this.myFormName = 'email';
    }
    if (this.myFormGroup === undefined) {
      this.myFormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }
  }
  onGetEmail(email){
    this.onGettingEmail.emit(email)
  }
}
