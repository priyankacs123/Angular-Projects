import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetComponent } from './det/det.component';
import { ProComponent } from './pro/pro.component';

const routes: Routes = [

  {
    path:'detlink', component:DetComponent
  },
  {
    path:'prolink', component:ProComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
