import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
