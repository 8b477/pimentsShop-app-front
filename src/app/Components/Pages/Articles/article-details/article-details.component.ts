import { Component, OnInit } from '@angular/core';
import { PIMENTS } from '../../../../Mockup/fake_data';
import { piments } from '../../../../Mockup/Models/piments_model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent implements OnInit {

  public id : number = -1
  public fakeData : piments[] = PIMENTS
  public pimentDetail : piments | undefined = undefined
  public isRegister : boolean = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {   
       //récup l'id du piment cliquer par la route
       this.id = Number(this.route.snapshot.paramMap.get('id')) 
       this.pimentDetail = this.fakeData[this.id]
  }

}
