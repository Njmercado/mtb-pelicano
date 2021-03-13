import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import User from '../../utils/user'
const user = new User('http://localhost:3000/login')

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Data
  email: string = ""
  password: string = ""
  error: boolean = false
  errorMessage: string = ""

  // Functions
  async verifyInformation() {
    const result = await user.login({email: this.email, password: this.password})
    if(result.error) {
      this.error = true
      this.errorMessage = result.message
    } else {
      console.log(result.data)
      localStorage.setItem("token", result.data.token)
      localStorage.setItem("charges", JSON.stringify(result.data.charges))
      localStorage.setItem("role", result.data.role)
      this.router.navigate(['/dashboard'])
    }
  }

  // openSignup() {
  //   this.router.navigate(['/signup'])
  // }
}
