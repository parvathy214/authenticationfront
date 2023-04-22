import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: Router, private api:BackendService) { }
  products:any
  
  //redirect to add form
  addPage() {
    this.route.navigate(['/addform'])
  }
  editpage(id:any){
    this.route.navigate(['/editform', id])
  }
  
  

  ngOnInit(){
    this.getData()
    
  }

getData(){
this.api.getData().subscribe((res:any)=>{
  // console.log()
  console.log("incoming data",res)

  this.products= res.data
})
}








//delete

deleteItem(id:any){
  this.api.deleteItem(id).subscribe((res:any)=>{
    alert('Deleted Successfully!!!')
    this.products = this.products.filter((e:any)=>e._id !== id)
  })
}

logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/login'])
}

}
