import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(FirstName,LastName,Email,BookingDate,BookingTime,Persons,Phone,SpecialRequest) {
      const obj = {FirstName,LastName,Email,BookingDate,BookingTime,Persons,Phone,SpecialRequest};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(FirstName,LastName,Email,BookingDate,BookingTime,Persons,Phone,SpecialRequest, id) {

      const obj = {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          BookingDate: BookingDate,
          BookingTime: BookingTime,
          Perons: Persons,
          Phone: Phone,
          SpecialRequest: SpecialRequest
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
