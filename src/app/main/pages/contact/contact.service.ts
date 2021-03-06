import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://formspree.io/f/xzboorvn';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendForm(payload: any) {
    return this.http.post(URL, payload);
  }
}
