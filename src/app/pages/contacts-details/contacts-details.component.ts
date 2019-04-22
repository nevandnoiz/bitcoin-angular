import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  contact: Contact

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let contactId: string = this.route.snapshot.paramMap.get("contactId")
    this.contactsService.getContactById(contactId).subscribe(contact => {
      this.contact = contact
    })
  }

  toList(){
    this.router.navigate(['/contacts'])
  }

  toEdit(){
    this.router.navigate(['contacts/edit',this.contact._id])
  }

}
