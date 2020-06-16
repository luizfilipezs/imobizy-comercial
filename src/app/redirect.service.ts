import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  private apiRoot = 'http://testando.imobizy.local:8080/api';

  constructor(private http: HttpClient) { }

  checkDomain(enterpriseCode: string): Observable<{}> {
    return this.http.get(this.apiRoot.concat(`/checarDominioCliente/${enterpriseCode}`));
  }
}

export interface CheckDomainResponseBody {
  subdomain: string;
  exists: boolean;
  domain: string;
  client: string;
}