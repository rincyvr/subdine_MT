import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  mailId : string;
  password : string;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required,, Validators.minLength(6)]],

    });
  }

  onGetEmail(email){
    this.mailId = email;
  }
  onGetPassword(pswd){
    this.password = pswd;
  }
  onSubmit(message) {
    if (this.form.valid) {
      this.router.navigate(['home']);
    console.log("messahe::::",message)
    } else {

      let temp = this.form.controls['email'];
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });
    }

  }
}
