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

pannier : piment[] = []
pannierSubscription! : Subscription

ngOnInit() 
{
  this.pannierSubscription = this._sharedArticleService.pannier$.subscribe((pannier)=>{this.pannier = pannier})
}

ngOnDestroy()
{
  this.pannierSubscription.unsubscribe()
}

}
