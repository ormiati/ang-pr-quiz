import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  serverAddress: string ='http://localhost:3000/quiz';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.serverAddress);
  }

  get(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.serverAddress}/${id}`);
  }

  create(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.serverAddress, quiz);
  }

   update(quiz: Quiz): Observable<Quiz> {
    return this.http.patch<Quiz>(`${this.serverAddress}/${quiz.id}`, quiz);
  }

   delete(quiz: Quiz): Observable<Quiz> {
    return this.http.delete<Quiz>(`${this.serverAddress}/${quiz.id}`);
  }

}

