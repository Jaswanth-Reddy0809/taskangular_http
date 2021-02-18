import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private user:UsersService,private actroute:ActivatedRoute) { }
productFG:any={}
  ngOnInit(): void {
    
    console.log(this.user.getData())
    console.log(this.actroute.snapshot.params.id)
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
  
    console.log(this.productFG.value)
  }
  updateUser(){
    
    this.user.update(this.actroute.snapshot.params.id,this.productFG.value).subscribe((temp:any)=>{
      console.log(this.productFG.value)
      this.productFG.reset()
      this.route.navigate(['users'])
    })
    console.log(this.user)
  }


  
  

}
