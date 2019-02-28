import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Business } from '../models/yelp.model';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json",
    "Authorization" : " Bearer 1a2m_TCMH0ctSPiB0iawhZ5RH7bHMn7xhbJqdq4FMGuXCV61kdaD8tu0MJrJTHX4qp2s_2QvqnAjZVOD9kWN5qfzCgweuXGnMMCRKv75Ei9HPaPE5GoeCbleTe12XHYx"
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  // private apiURL: string = "https://api.yelp.com/v3/businesses/search?open_now=true&location=";
  
  private apiURL: string = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true&location=";
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  constructor(private http: HttpClient) { }


// searchTermFetch(business: Business )

  getSearchFetch(term): any {
    return this.http.get<Business>(`${this.apiURL}${term}`, httpOptions).pipe(
      catchError(this.handleError<Business>("getSearchFetch")),
      tap(data => {
        return data
      })
    )
  }
}

//1a2m_TCMH0ctSPiB0iawhZ5RH7bHMn7xhbJqdq4FMGuXCV61kdaD8tu0MJrJTHX4qp2s_2QvqnAjZVOD9kWN5qfzCgweuXGnMMCRKv75Ei9HPaPE5GoeCbleTe12XHYx
//WMEasssHcQdgC3TECaL80g
