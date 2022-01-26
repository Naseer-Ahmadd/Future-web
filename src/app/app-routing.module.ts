import { JavascriptComponent } from './javascript/javascript.component';
import { CssComponent } from './css/css.component';
import { HTMLComponent } from './html/html.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'html', component: HTMLComponent},
  { path: 'css', component: CssComponent},
  { path: 'javascript', component:JavascriptComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
