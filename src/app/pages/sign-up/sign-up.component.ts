import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  nickname: string

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onSignUp() {
    this.userService.userSubject.subscribe(() => {
      this.router.navigate(['/'])
    })
    this.userService.signUp(this.nickname)
  }

}
