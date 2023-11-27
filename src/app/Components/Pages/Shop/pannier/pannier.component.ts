import { Subscription } from 'rxjs';
import { piment } from '../../../../Mockup/Models/piments_model';
import { SharedArticleService } from './../shared-article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrl: './pannier.component.scss'
})
export class PannierComponent implements OnInit {

constructor(private _sharedArticleService : SharedArticleService) { }

public pannier: { article: piment, quantity: number }[] = [];
public pannierSubscription : Subscription | undefined
public totalCost : number = 0
public totalQuantity : number = 0

ngOnInit() 
{
  this.pannierSubscription = this._sharedArticleService.pannier$.subscribe((dataPannier)=>{this.pannier = dataPannier})
  this.calculateTotals()
}

ngOnDestroy()
{
  if(this.pannierSubscription != undefined)
    this.pannierSubscription.unsubscribe()
}


calculateTotals()
{
    // Réinitialiser les totaux à zéro
    this.totalQuantity = 0;
    this.totalCost = 0;

    // Calculer les totaux à partir du panier actuel
    this.pannier.forEach((item) => {
      this.totalQuantity += item.quantity;
      this.totalCost += item.quantity * item.article.price;
    });
}

addOneArticle(cartItem: { article: piment, quantity: number }) {
  cartItem.quantity++;
  this.calculateTotals();
  this.getFilteredPannier();
}

lessOneArticle(cartItem: { article: piment, quantity: number }) {
  if (cartItem.quantity > 0) {
    cartItem.quantity--;
    this.calculateTotals();
    this.getFilteredPannier();
  }
}

// PannierComponent.ts
getFilteredPannier(): { article: piment; quantity: number }[] {
  return this.pannier.filter(article => article.quantity > 0);
}



}