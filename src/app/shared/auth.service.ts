import { Injectable } from '@angular/core';

@Injectable()
export class AuthService  {
  private token = '123';
  constructor() { }

get isLogged() {
    return this.token;
}

}
