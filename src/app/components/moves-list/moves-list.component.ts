import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/models/User';
import Move from 'src/app/models/Move';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() contact: Contact

  moves: Move[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.moves = user.moves
      this.moves.filter(move => move.toId === this.contact._id)
    })
    this.userService.getUser()
  }

}
