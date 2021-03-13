import { Component, OnInit } from '@angular/core';
import Charge from '../../utils/charges'
const charge = new Charge('http://localhost:3000/charge')

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role")
    this.charges = JSON.parse(localStorage.getItem("charges"))
  }

  role: string = ""
  charges = []

  async deleteCharge(data) {
    const result = await charge.delete({
      charge_id: data.charge_id,
      email: data.email,
      token: localStorage.getItem("token")
    })
    if(!result.error){
      this.charges = this.charges.filter(item => item.charge_id !== data.charge_id)
    }
  }
}
