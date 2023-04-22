import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AddformComponent } from './Pages/addform/addform.component';
import { EditformComponent } from './Pages/editform/editform.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',canActivate:[AuthGuard],component:HomeComponent},
  {path:'addform',component:AddformComponent},
  {path:'editform/:id',component:EditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
