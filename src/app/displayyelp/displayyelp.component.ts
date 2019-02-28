import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../services/apiservice.service'
import { FindValueOperator } from 'rxjs/internal/operators/find';

export interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-displayyelp',
  templateUrl: './displayyelp.component.html',
  styleUrls: ['./displayyelp.component.css']
})
export class DisplayyelpComponent implements OnInit {
  private resArr = [];
  private finalArr = [];
  private yelp = {location:{}, image_url:"", transactions: [], rating: 0};
  private transaction: string;
  private ratingView;

  private ratings = [
    {value: 1, view: '⭐'},
    {value: 2, view: '⭐⭐'},
    {value: 3, view: '⭐⭐⭐'},
    {value: 4, view: '⭐⭐⭐⭐'},
    {value: 5, view: '⭐⭐⭐⭐⭐'}
  ];

  constructor(private ApiserviceService: ApiserviceService) { }

  ngOnInit() {
  }

  sendSearch(term: string, price: string): void {
    event.preventDefault();
    this.ApiserviceService.getSearchFetch(term).subscribe(DisplayInfo => {
    this.resArr = DisplayInfo.businesses;
    this.transaction = "";
    // console.log(this.resArr);
    this.sortArr(price);

    // if(this.resArr)
    })
  }

  sortArr(price) {
    for(let res of this.resArr){
      if(res.price == price && res.is_closed == false){
        this.finalArr.push(res);
      }
    }
    console.log(this.finalArr);
    this.displayRes();
  }

  displayRes(){
    
    this.yelp = this.finalArr[Math.floor((Math.random() * this.finalArr.length))]
    
    console.log(this.yelp);
    for(let tran of this.yelp.transactions){
      if(tran == "delivery"){
        this.transaction = tran;
      }
    }

    for(let star of this.ratings){
      if(star.value == Math.round(this.yelp.rating)){
        this.ratingView = star.view
      }
    }
    this.resArr = [];
    this.finalArr = [];

  }

}
