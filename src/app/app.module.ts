import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, routingComponent, AccountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
