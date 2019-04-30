import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Business} from '../business.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  Url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }
  addBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(this.Url + 'add-business/', JSON.stringify(business), httpOptions)
      .pipe(
        catchError(this.handleError('add-business', business))
      );
  }
  getBusiness(id: number): Observable<Business> {
    const url = `${this.Url}business-details/?business_id=${id}`;
    return this.http.get<Business>(url).pipe(
      tap(_ => console.log(`fetched Business id=${id}`)),
      catchError(this.handleError<Business>(`getbusiness id=${id}`))
    );
  }
  getBusinessList(): Observable<Business[]> {
    const url = `${this.Url}/business`;
    return this.http.get<Business[]>(url).pipe(
      tap(_ => console.log(`fetched Business `)),
      catchError(this.handleError<Business[]>(`getbusiness`))
    );
  }
  searchBusinessbyCategory(term: string): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.Url}businesses-list/?category=${term}`).pipe(
      tap(_ => console.log(`found business matching "${term}"`)),
      catchError(this.handleError<Business[]>('searchBusiness', []))
    );
  }
  searchBusiness(term: string): Observable<Business[]> {
    if (!term.trim()) {
      // if not search term, return empty business array.
      return of([]);
    }
    return this.http.get<Business[]>(`${this.Url}search/?q=${term}`).pipe(
      tap(_ => console.log(`found business matching "${term}"`)),
      catchError(this.handleError<Business[]>('searchBusiness', []))
    );
  }
  getAll(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.Url}businesses-list`)
      .pipe(
        catchError(this.handleError('getAll', []))
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

