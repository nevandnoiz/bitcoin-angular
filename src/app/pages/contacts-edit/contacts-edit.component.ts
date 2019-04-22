import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {

  contact: Contact
  isCreate: boolean = false

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let contactId: string = this.route.snapshot.paramMap.get("contactId")
    if (!contactId) {
      this.contact = { _id: '', name: '', email: '', phone: '' }
      return this.isCreate = true
    } else {
      this.contactsService.getContactById(contactId).subscribe(contact => {
        this.contact = contact
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
    if (!this.contact.name || !this.contact.email || !this.contact.phone) return
    this.contactsService.saveContact(this.contact)
    if (this.isCreate) return this.toList()
    else return this.toDetails()
  }

  onDelete() {
    this.contactsService.deleteContact(this.contact._id)
    return this.toList()
  }

  toDetails() {
    return this.router.navigate(['/contacts', this.contact._id])
  }

  toList() {
    return this.router.navigate(['/contacts'])
  }

}
