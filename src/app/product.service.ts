import { Injectable } from '@angular/core';

import { Http } from '@angular/http'

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((r) => <Album>r.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productUrl).map((r) => <Product[]>r.json())
  }
}
