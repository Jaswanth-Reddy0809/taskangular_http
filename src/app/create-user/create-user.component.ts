import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UsersService } from '../users.service'
import{Router} from '@angular/router'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
productFG : any={}
  constructor(private fb:FormBuilder,private user:UsersService,private route:Router) { }

  ngOnInit(): void {
    this.productFG=this.fb.group({
      name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      email:this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
      mobile1:this.fb.control('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      password1:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      confirmpass:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      country1:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      state1:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      city1:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      gender1:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      zipcode1:this.fb.control('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
    })
  }
  submitform(){
    console.log(this.productFG.value)
    this.user.adduser(this.productFG.value).subscribe((temp:any)=>{
      this.productFG.reset()
      this.route.navigate(['products'])
    console.log(this.user)
    alert("created")
  })

}
}
