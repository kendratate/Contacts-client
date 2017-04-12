import { Component, OnInit} from '@angular/core';
import { ContactService } from "../../contact.service";
import { contact } from '../Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})




export class ContactsComponent implements OnInit {
  errorMessage: string;
  contacts: contact[];
  mode = 'observable';


  constructor(private contactService: ContactService) { }
  ngOnInit() {
    this.getContacts();
    console.log(this.contacts);
  }

  getContacts() {
    this.contactService.getContacts()
      .then(
          contacts => this.contacts = contacts,
          error => this.errorMessage = <any>error);
  }

  sortAscending() {
    this.contactService.sortAsc()
      .then(
          contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
  }

  sortDescending() {
    this.contactService.sortDesc()
      .then(
        contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
  }

}


