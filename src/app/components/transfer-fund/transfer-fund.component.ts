import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/Contact';
import { UserService } from 'src/app/services/user.service';
import Move from 'src/app/models/Move';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact

  move: Move = {
    to: "",
    toId: "",
    amount: ""
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.move.to = this.contact.name
    this.move.toId = this.contact._id
  }

  digitsValidation(e) {
    if (isNaN(+e.target.value)) return e.target.value = ""
  }

  onTransfer() {
    if (!this.move.amount) return console.log('Please specify the amount!')
    let move=JSON.parse(JSON.stringify(this.move));
    this.userService.addMove(move)
    this.move.amount = ""
  }

}
