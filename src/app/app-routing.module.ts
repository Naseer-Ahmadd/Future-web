import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CssComponent } from './css/css.component';
import { HTMLComponent } from './html/html.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'html', component: HTMLComponent},
  { path: 'css', component: CssComponent},
  { path: 'bootstrap', component: BootstrapComponent},
  { path: 'javascript', component:JavascriptComponent },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
