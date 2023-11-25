import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/Home/home.component';
import { ShopComponent } from './Components/Pages/Shop/shop.component';
import { ArticleDetailsComponent } from './Components/Pages/Articles/article-details/article-details.component';
import { RegisterComponent } from './Components/Pages/User/register/register.component';
import { ConnectionComponent } from './Components/Pages/User/connection/connection.component';

const routes: Routes = 
[
    {path:"", component : HomeComponent},
    {path:"shop", component : ShopComponent},
    {path:"details/:id", component : ArticleDetailsComponent},
    {path:"register", component : RegisterComponent},
    {path:"connection", component : ConnectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
