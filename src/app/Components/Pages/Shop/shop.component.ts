import { ShopService } from './shop.service';
import { Component, OnInit } from '@angular/core';
import { piment } from '../../../Mockup/Models/piments_model';

@Component({
    selector: 'app-shop',
    standalone: false,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

public pimentsList! : piment[]
    
constructor(private _shopService : ShopService) {}

    ngOnInit(): void {
        //UPDATE pimentsList with ALL ITEMS GET BY API through my service
        this._shopService.displayPiments()
                         .subscribe(piments => this.pimentsList = piments)
    }
}


