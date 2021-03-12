// import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import User from '../../utils/user'
const user = new User('http://localhost:3000/login')

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  // constructor(private router: Router) { }
  constructor() { }

  ngOnInit(): void {
  }

  //Data
  email: string = ""
  password: string = ""

  // Functions
  async verifyInformation() {
    const result = await user.login({email: this.email, password: this.password})
    await console.log(result)
  }

  // openSignup() {
  //   this.router.navigate(['/signup'])
  // }
}
