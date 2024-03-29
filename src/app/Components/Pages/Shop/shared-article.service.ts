import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { piment } from '../../../Mockup/Models/piments_model';

@Injectable({
  providedIn: 'root'
})
export class SharedArticleService {
  private pannierSource = new BehaviorSubject<{ article: piment, quantity: number }[]>([]);
  pannier$ = this.pannierSource.asObservable();

  addToPannier(article: piment) {
    const currentPannier = this.pannierSource.getValue();
    const existingArticleIndex = currentPannier.findIndex(item => item.article.id === article.id);

    if (existingArticleIndex !== -1) {
      currentPannier[existingArticleIndex].quantity++;
    } else {
      // Si l'article n'existe pas, ajouter un nouvel élément au tableau
      this.pannierSource.next([...currentPannier, { article, quantity: 1 }]);
    }
  }
}
