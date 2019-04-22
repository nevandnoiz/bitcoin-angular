import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact

  constructor(private router:Router) { }

  toDetails(){
  return this.router.navigate(['contacts',this.contact._id])
  }

  ngOnInit() {
  }

}
