import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
dataList:Array<object>=[];
  constructor(private dataserv:ProductsService) { }

  ngOnInit(): void {
    this.dataserv.getAllProducts().subscribe((data) => {
      this.dataList=data
      console.log(this.dataList)

    })
  }

}
