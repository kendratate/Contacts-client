import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { contact } from './app/Contact';

@Injectable()

export class ContactService {
  private contactsUrl = 'http://localhost:3000/';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getContacts(): Promise<contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.contacts || { };
  }

  sortAsc(): Promise<contact[]> {
    return this.http.get(this.contactsUrl + "sorta")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  sortDesc(): Promise<contact[]> {
    return this.http.get(this.contactsUrl + "sortd")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  create(indexVal: string, firstName: string, lastName: string, phoneNum:string): Promise<contact[]>{
    return this.http.post(this.contactsUrl, JSON.stringify({id:indexVal, firstname: firstName, lastname: lastName, phone: phoneNum }), {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteContact(indexVal: string){
    return this.http.delete(this.contactsUrl + indexVal)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  editContact(indexVal: string, firstName: string, lastName: string, phoneNum:string): Promise<contact[]>{
    return this.http.post(this.contactsUrl + indexVal, JSON.stringify({id:indexVal, firstname: firstName, lastname: lastName, phone: phoneNum }), {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  searchContacts(searchterm:string): Promise<contact[]> {
    return this.http.get(this.contactsUrl + "search/" + searchterm)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}



