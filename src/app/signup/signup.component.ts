import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { PhoneValidators } from './phone.validators';
// import { phoneNumberValidator } from '../validator/phone-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    nama: new FormControl('',Validators.required),
    alamat: new FormControl('',Validators.required),
    tanggallahir: new FormControl('',Validators.required),
    jeniskelamin: new FormControl('',Validators.required),
    nohp: new FormControl('',[Validators.required,PhoneValidators.cannotContainChara]),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

  get nama(){
    return this.form.get('nama');
  }
  get alamat(){
    return this.form.get('alamat');
  }
  get tanggallahir(){
    return this.form.get('tanggallahir');
  }
  get jeniskelamin(){
    return this.form.get('jeniskelamin');
  }
  get nohp(){
    return this.form.get('nohp');
  }
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
