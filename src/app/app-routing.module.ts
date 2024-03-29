import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/Home/home.component';
import { ShopComponent } from './Components/Pages/Shop/shop.component';
import { ArticleDetailsComponent } from './Components/Pages/Articles/article-details/article-details.component';
import { RegisterComponent } from './Components/Pages/User/register/register.component';
import { ConnectionComponent } from './Components/Pages/User/connection/connection.component';
import { PannierComponent } from './Components/Pages/Shop/pannier/pannier.component';

const routes: Routes = 
[
    {path:"", component : HomeComponent},
    {path:"register", component : RegisterComponent},
    {path:"shop", component : ShopComponent},
    {path:"details/:id", component : ArticleDetailsComponent},
    {path:"connection", component : ConnectionComponent},
    {path:"pannier", component : PannierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
