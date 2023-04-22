import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  constructor(private http:HttpClient) { }
  api= 'http://localhost:3000'

  
  // addProduct 
  addProduct(products:any){
  return this.http.post(`${this.api}`,products)
  }


  getToken():boolean{
    return !!localStorage.getItem('token')
  }

 
  //get all data
  getData(){
   return this.http.get(`${this.api}`)
  }
 
  
 // delete 
 deleteItem(id:any){
   return this.http.delete(`${this.api}/${id}`)
  }
 
  updateProduct(id:any, product:any){
    return this.http.put(`${this.api}/${id}`,product)
  } 


login(data:any){
  return this.http.post(`${this.api}/auth`,data)
}


}
