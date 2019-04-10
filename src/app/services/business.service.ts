import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  Url = 'http://127.0.0.1:8000/add-business/';
  constructor(private http: HttpClient) { }
  addBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(this.Url, business, httpOptions)
      .pipe(
        catchError(this.handleError('add-business', business))
      );
  }
  getBusniss(id: number): Observable<Business> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Business>(url).pipe(
      tap(_ => console.log(`fetched Business id=${id}`)),
      catchError(this.handleError<Business>(`getHero id=${id}`))
    );
  }
  searchBusiness(term: string): Observable<Business[]> {
    if (!term.trim()) {
      // if not search term, return empty business array.
      return of([]);
    }
    return this.http.get<Business[]>(`${this.Url}/?q=${term}`).pipe(
      tap(_ => console.log(`found business matching "${term}"`)),
      catchError(this.handleError<Business[]>('searchBusiness', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  }

