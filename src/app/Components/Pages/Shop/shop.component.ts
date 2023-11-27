import { SharedArticleService } from './shared-article.service';
import { ShopService } from './shop.service';
import { Component, OnInit } from '@angular/core';
import { piment } from '../../../Mockup/Models/piments_model';

@Component({
    selector: 'app-shop',
    standalone: false,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit 
{

    constructor(private _shopService : ShopService, private _sharedArticleService: SharedArticleService) {}

// Logic Shop affichage
    public pimentsList! : piment[]
    public connected : boolean = false;    


    ngOnInit(): void 
    {
// UPDATE pimentsList with ALL ITEMS GET BY API through my service
        this._shopService.displayPiments()
                            .subscribe(piments => this.pimentsList = piments)

        if(localStorage.getItem('role') === 'Register')
            this.connected = true;
    }


// Logique du panier
    public currentArticle : piment | undefined = undefined
    public pannier : piment[] = []
// Event au clic déclenche la méthode AddArticle, celle ci récupère l'id de l'item cliquer et le met dans un tableau pannier[]
// TODO faire en sorte que si un article est déjà dans le tableau incrémenter sa valeur mais ne rajouter l'item
    AddArticle(id : number)
    {
    try {
        //Récupe l'article via son id
        this.currentArticle = this.pimentsList.find((piment)=> piment.id == id)

        // Check si l'article est déjà présent dans le pannier
        const isAlready : boolean = this.pannier.find((item) => item.id == id) != undefined ? true : false

        //Envoie l'article cliquer dans le pannier[]
        if(this.currentArticle != undefined && !isAlready)
        {
            //this.pannier.push(this.currentArticle);
            console.log('ajouter');
            this._sharedArticleService.addToPannier(this.currentArticle)
        }

        if(isAlready)
        {
            alert("Article déjà présent dans le pannier !")
        }
        
        } catch (e) {
            console.error('Fichier : pannier.component.ts méthode: AddArticle \n => Error au moment de l\'insertion d\'un article dans le pannier\n', this.currentArticle)
        }
           
    }



// **********   ZONE TEST + TODO ******************


    test(){console.log('1');}
    test2(){console.log('2');}
    infos(){alert('Identifier vous pour ajouter au panier !')} // faire un hover pour afficher des explications CREER UNE DIRECTIVE

}


