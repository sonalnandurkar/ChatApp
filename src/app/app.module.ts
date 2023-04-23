import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MobileViewComponent,
    DesktopViewComponent,
    LayoutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
