import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private data:ProductsService,private actroute:ActivatedRoute) { }
  productFG:any={}
  ngOnInit(): void {
    this.productFG=this.fb.group({
      productName:this.fb.control(''),
      price:this.fb.control(''),
      description:this.fb.control('')})

    

  }
  updateProduct(){
    
    this.data.update(this.actroute.snapshot.params.id,this.productFG.value).subscribe((temp:any)=>{
      this.productFG.reset()
      this.route.navigate(['products'])
    })
    console.log(this.productFG.value)
  }

}
