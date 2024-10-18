import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategorySingleComponent } from './pages/category-single/category-single.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'category/:category/:id', component: CategorySingleComponent},
  {path:'post/:id', component: SinglePostComponent},
  {path:'about', component: AboutComponent},
  {path:'term-conditions', component: TermsAndConditionsComponent},
  {path:'contact', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
