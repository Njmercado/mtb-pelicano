import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import User from '../../utils/user'
const user = new User('http://localhost:3000/register')

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  email = ""
  document_number= ""
  name = ""
  last_name = ""
  phone = ""
  role = ""
  password = ""
  error = false
  errorMessage = ""

  //Functions
  async signUp() {
    const response = await user.signUp({
      email: this.email,
      document_number: this.document_number,
      name: this.name,
      last_name: this.last_name,
      phone: this.phone,
      role: this.role,
      password: this.password,
    })

    if(!response.error) this.router.navigate(['/dashboard'])
    else{
      this.error = true
      this.errorMessage = response.message
    }

  }

  logIn() {
    this.router.navigate(['/login'])
  }
}
