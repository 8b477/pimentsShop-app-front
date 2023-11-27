import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './Components/Shared/nav/nav.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ArticleDetailsComponent } from './Components/Pages/Articles/article-details/article-details.component';
import { ShopPipe } from './Components/Pages/Shop/shop.pipe';
import { ShopComponent } from './Components/Pages/Shop/shop.component';
import { HomeComponent } from './Components/Pages/Home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './Components/Pages/Shop/shop.service';
import { RegisterComponent } from './Components/Pages/User/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Components/Pages/User/user.service';
import { ConnectionComponent } from './Components/Pages/User/connection/connection.component';
import { AuthModule } from '@auth0/auth0-angular';
import { PannierComponent } from './Components/Pages/Shop/pannier/pannier.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ArticleDetailsComponent,
    ShopComponent,
    ShopPipe,
    RegisterComponent,
    ConnectionComponent,
    PannierComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot(
    {
      domain : 'dev-um7aqora6bzd5m7p.us.auth0.com',
      clientId : '733HItN8GHFjqJ3PVLzrqV8blCrz48HP',
      authorizationParams : {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: 
  [
    importProvidersFrom(HttpClientModule),
    ShopService,
    UserService
  ]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
