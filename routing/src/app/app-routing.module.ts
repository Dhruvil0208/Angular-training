import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
const routes: Routes = [
  {
    path:'about',
    component: AboutComponent,
    children:[
      {
        path: 'company',
        component: AboutcompanyComponent
      },
      {
        path: 'me',
        component: AboutmeComponent
      }
    ]
  },
  {
    path:'user/:id',
    component: UserComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'**',
    component: NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
