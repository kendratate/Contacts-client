/**
 * Created by kendratate on 4/12/17.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { contact } from '../src/app/Contact';

@Injectable()

export class SharedService {
  private contacts = new Subject<contact[]>();

  contacts$ = this.contacts.asObservable();

  publishData(data: contact[]) {
    this.contacts.next(data);
  }



  // publishData(data: contact[]) {
  //   console.log('Inside publishData ' + this.contacts);
  //   return this.contacts;
  // }
  // subscribeData(data: contact[]) {
  // console.log('Inside subscribeData ' + this.contacts);
  // return this.contacts;
  // }
}
