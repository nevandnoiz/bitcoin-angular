import { Component, OnInit, Output } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  term: string

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {

  }

  onFilter() {
    if (this.term === '') return this.contactsService.getContacts()
    return this.contactsService.getContacts({ term: this.term })
  }

}
