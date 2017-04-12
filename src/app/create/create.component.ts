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
  var indexCount = 99;
  contacts: contact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  createContact(firstName: string, lastName: string, phoneNum: string) {
    if (!firstName) {return;}
    indexCount++;
    this.contactService.create(indexCount, firstName,lastName,phoneNum)
      .then(
        contacts => console.log(contacts));
  }

}
