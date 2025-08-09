import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { ProductsInterfaceSpareParts } from '../../interfaces/productsSpareParts/products-interface-spareParts';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductSparePartsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsInterfaceSpareParts>{
    const access_token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });
    return this.http.get<ProductsInterfaceSpareParts>(`${baseUrl}/dashboardCli/spareParts`, {headers});
  }
}
