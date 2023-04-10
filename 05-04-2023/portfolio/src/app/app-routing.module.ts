import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MorningComponent } from './morning/morning.component';
import { EveningComponent } from './evening/evening.component';

const routes: Routes = [

   {
    path:'eveninglink' , component:EveningComponent
   },
   
   {
    path:'morninglink' , component:MorningComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
