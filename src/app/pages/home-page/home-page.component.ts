import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import User from '../../models/User'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: User
  bitCoinRate: number

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.user = user
    })
    this.userService.getUser()
    this.bitcoinService.getRate().subscribe(rate => {
      this.bitCoinRate = rate
    })
  }

}