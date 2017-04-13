import {Component, OnInit, Input} from '@angular/core';
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

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.getContacts();
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

  indexCount = 99;

  createContact(firstName: string, lastName: string, phoneNum: string) {
    //take out index when connected to a database
    if (!firstName) {
      return;
    }
    this.indexCount++;
    this.contactService.create(String(this.indexCount), firstName, lastName, phoneNum)
      .then(
        contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
  }

  editContact(index:string){

  }

  deleteContact(index: string){
    console.log(index);
    this.contactService.deleteContact(index)

      .then(
        contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
  }

}




