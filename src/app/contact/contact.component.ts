import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FirstName;
  LastName;
  Email;
  BookingDate;
  BookingTime;
  Persons;
  Phone;
  SpecialRequest;
  constructor(private us: UserService) { }

  ngOnInit() {
  }

  addData() {
    this.us.addData(this.FirstName,this.LastName,this.Email,this.BookingDate,this.BookingTime,this.Persons,this.Phone,this.SpecialRequest);
    // console.log(this.name)
}

}
