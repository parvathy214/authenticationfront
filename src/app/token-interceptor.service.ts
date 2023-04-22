import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
// import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor {
  
  token =localStorage.getItem('token');
  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedRequest = req.clone(
      {
        setHeaders:{
          Authorization :`Bearer ${this.token}`
        }

      }
    )
      return next.handle(tokenizedRequest)
  }
}
