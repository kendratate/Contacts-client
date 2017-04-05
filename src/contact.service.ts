import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
//
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { contact } from './app/Contact';

@Injectable()

export class ContactService {
  private contactsUrl = 'http://localhost:3000/';  // URL to web API

  constructor (private http: Http) {}

  // getContacts(){
  //   return new Promise(resolve => {
  //     // We're using Angular HTTP provider to request the data,
  //     // then on the response, it'll map the JSON data to a parsed JS object.
  //     // Next, we process the data and resolve the promise with the new data.
  //     this.http.get('http://localhost:3000/')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         // we've got back the raw data, now generate the core schedule data
  //         // and save the data for later reference
  //         this.contact = data;
  //         resolve(this.contact);
  //       });
  //   });
  // }

  getContacts(): Promise<contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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
    // return Observable.throw(errMsg);
    return Promise.reject(errMsg);
  }
}



