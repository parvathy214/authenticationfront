import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
  
  productForm: any //initialization

  constructor(private fb: FormBuilder, private api: BackendService ,private router:Router) {

    // form building // inside constructor
    this.productForm = this.fb.group({
      title: [''],
      Price: ['']
    })
  }

  // to submit form 
  submitForm() {
    console.log(this.productForm.value)
    let product = this.productForm.value
    // sending data to backend via service file function named addProduct 
    this.api.addProduct(product).subscribe((res: any) => {
      console.log(res)

      this.router.navigate(['/'])
    })

  }

}
