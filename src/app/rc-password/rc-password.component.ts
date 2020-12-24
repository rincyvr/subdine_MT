import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rc-password',
  templateUrl: './rc-password.component.html',
  styleUrls: ['./rc-password.component.scss']
})
export class RcPasswordComponent implements OnInit {
  @Input() myFormGroup: FormGroup;
  @Input() myFormName: string;
  @Output() onGettingPassword = new EventEmitter<any>();
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.myFormName === undefined) {
      this.myFormName = 'pwd';
    }
    if (this.myFormGroup === undefined) {
      this.myFormGroup = this.formBuilder.group({
        pwd: ['', [Validators.required,, Validators.minLength(6)]]
      });
    }
  }
  onGetPassword(pswd){
    this.onGettingPassword.emit(pswd)
  }
}
