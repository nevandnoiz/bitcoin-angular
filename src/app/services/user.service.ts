import { Injectable } from '@angular/core';
import { StorageService } from './storage.service'
import User from '../models/User';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private storageService: StorageService) { 
    this.getUser();
  }

  userSubject = new BehaviorSubject<User>(null);

  public getUser() {
    let user = this.storageService.loadFromStorage('user')
    this.userSubject.next(user)
  }

  public signUp(nickname){
    let user = {
      name: nickname,
      coins: 100,
      moves: []
    }
    this.storageService.saveToStorage('user', user);
    this.userSubject.next(user);
  }

  public addMove(move) {
    move.at = (new Date()).toLocaleString('he-IL');
    let user = this.userSubject.value;
    user.moves.push(move)
    user.coins -= move.amount
    this.storageService.saveToStorage('user', user)
    this.userSubject.next(user)
  }

}
