import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Array<Object>>{
   return this.http.get<Array<Object>>('https://5cdd0a92b22718001417c19d.mockapi.io/api/products')
   
    
  }
  productId(id:number):Observable<object>{
    return this.http.get('https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}')

    //return this.productData.find(p => p.id==id)
  }
  getLength(){
    //return this.productData.length
  }
  deleteObj(id:number)
  {
    return this.http.delete(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`)


    //var index =this.productData.map(item => {return item.id}).indexOf(id)
    //this.productData.splice(index,1)
    //console.log(index)
  }
  addProduct(temp:any){
    return this.http.post('https://5cdd0a92b22718001417c19d.mockapi.io/api/products',temp)
    //temp.id=this.productData.length+1
    //temp.img="https://whyfutz.com/how-to-sell-a-product/"
    //this.productData.push(temp)
  }
  
  update(id:number,temp:any)
  {
    return this.http.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`,temp)
    //let index=this.productData.findIndex((item) => {return item.id==id})
   // temp.id=id
    //this.productData[index]=temp
   // console.log(this.productData)
}
}