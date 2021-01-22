import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandasRockComponent } from './bandas-rock/bandas-rock.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bandas-rock/:id',
    component: BandasRockComponent
  },
  {
    path: 'bandas-rock',
    component: BandasRockComponent
  },
  {
    path: 'list',
    component : ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
