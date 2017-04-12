import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../contact.service";
import { contact } from '../Contact';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ContactService]
})


export class CreateComponent implements OnInit {
  contacts: contact[];
  indexCount = 99;
  constructor(private contactService: ContactService) { }

  ngOnInit() {

  }

  createContact(firstName: string, lastName: string, phoneNum: string) {
    //take out index when connected to a database
    if (!firstName) {return;}
    this.indexCount++;
    this.contactService.create(String(this.indexCount), firstName, lastName, phoneNum)
      .then(
        //contacts => console.log(contacts);
        //contacts => this.contactComponent.getContacts()
        contacts => this.contacts = contacts
        );
  }

}
