import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import Contact from 'src/app/models/Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[]

  constructor(
    private contactsService: ContactsService,
    private router: Router) { }


  ngOnInit() {
    this.contactsService.contactsSubject.subscribe(contacts => {
      this.contacts = contacts
    })
    this.contactsService.getContacts()
  }

  toCreate() {
    this.router.navigate(['/contacts/edit'])
  }

}
