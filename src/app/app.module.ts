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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
