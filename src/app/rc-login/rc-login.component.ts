import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rc-login',
  templateUrl: './rc-login.component.html',
  styleUrls: ['./rc-login.component.scss']
})
export class RcLoginComponent implements OnInit {
  @Output() onSubmitting = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.onSubmitting.emit("submitted")
  }
}
