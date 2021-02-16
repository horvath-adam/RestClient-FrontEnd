import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const EXAMPLE_API = 'https://localhost:44389/api/Example';

@Injectable({
  providedIn: 'root'
})

export class ExampleSerivce {

  constructor(private httpCLient: HttpClient) { }

  getAllExamples(): Observable<string[]> {
    return this.httpCLient.get<string[]>(EXAMPLE_API);
  }

  getExample(id: number): Observable<any> {
    return this.httpCLient.get<any>(EXAMPLE_API + '/' + id);
  }

  addExample(newExample: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    return this.httpCLient.post<any>(EXAMPLE_API, newExample, {headers});
  }

  editExample(editExample: string, id: number): Observable<any> {
    return this.httpCLient.put<any>(EXAMPLE_API + '/' + id, editExample);
  }

  deleteExample(id: number): Observable<any> {
    return this.httpCLient.delete<any>(EXAMPLE_API + '/' + id);
  }
}
