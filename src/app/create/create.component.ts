import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ContactService } from "../../contact.service";
import { contact } from '../Contact';

import { SharedService } from '../../shared.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ContactService]
})


export class CreateComponent implements OnInit {
  indexCount = 99;
  contacts: contact[];
  errorMessage: string;
  constructor(private contactService: ContactService, private _sharedService: SharedService) {}

  ngOnInit() {

  }


  createContact(firstName: string, lastName: string, phoneNum: string) {
    //take out index when connected to a database
    if (!firstName) {return;}
    this.indexCount++;
    this.contactService.create(String(this.indexCount), firstName, lastName, phoneNum)
      .then(
        contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
    this._sharedService.publishData(this.contacts);

  }

  onSubmit(): void{
    this._sharedService.publishData(this.contacts);
  }

}
