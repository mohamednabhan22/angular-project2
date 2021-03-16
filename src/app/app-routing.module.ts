import { AcademyComponent } from './components/Academy/Academy.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import {  SolutionsComponent } from './components/Solutions/Solutions.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},

{path:"Solutions",component:SolutionsComponent},
{path:"blog",component:BlogComponent },
{path:"Academy",component:AcademyComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
