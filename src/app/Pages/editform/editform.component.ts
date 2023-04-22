import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent {
  productForm: any;
  productId:any;

  constructor(private fb: FormBuilder, private api: BackendService, private router: Router, private route: ActivatedRoute) {
    this.productForm = this.fb.group({
      title: [''],
      Price: ['']
    });
  }

  updateProduct() {
    this.productId = this.route.snapshot.params['id'];
    let product = this.productForm.value;
    this.api.updateProduct(this.productId, product).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
  


}
