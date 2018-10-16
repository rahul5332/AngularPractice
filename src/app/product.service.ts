import { Injectable } from '@angular/core';
import { product } from './product';
import { Observable, of, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = "http://localhost/ProductAPI/api/product";
  constructor(private http: Http) { }

  GetProductsNew(): Observable<product[]> {
    return this.http.get(this.apiUrl).pipe(map(response => <product[]>response.json()));
  }


  GetProduct(id: number): Observable<product> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    //return of(PRODUCTLIST.find(product => product.id === id));
    return this.http.get(this.apiUrl).pipe(
      map(response => (<product[]>response.json()).find(product=>product.id==id)));
  }
} 
