import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl: string = 'http://localhost:8443/pages/product';

  constructor(private _httpClient: HttpClient) { }

  getAllProducts(){
    return this._httpClient.get(this.baseUrl);
  }

  deleteProduct(id:Number)
  {
    return this._httpClient.delete(this.baseUrl + '/delete/' + id);
  }

  getOne(id:Number)
  {
    return this._httpClient.get(this.baseUrl + '/edit/' + id);
  }
}
