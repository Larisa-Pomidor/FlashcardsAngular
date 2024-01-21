import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  cards: any;
  constructor(private http: HttpClient) {
    this.getAllCards();
  }

  getAllCards() {
    this.http.get("http://localhost:8080/api/v1/cards")
      .subscribe((response) => {
        this.cards = response;
      });
  }

  deleteCard(id: number) {
    this.http.delete("http://localhost:8080/api/v1/cards/" + id).subscribe(
      () => {
        console.log('DELETE request successful');
        this.cards = this.cards.filter((element: any) => element.id !== id);
      },
      (error) => {
        console.error('Error during DELETE request:', error);
      }
    );  
  }
}