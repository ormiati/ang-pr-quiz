import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  serverAddress: string ='http://localhost:3000/questions';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.serverAddress);
  }

  get(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.serverAddress}/${id}`);
  }

  create(question: Question): Observable<Question> {
    return this.http.post<Question>(this.serverAddress, question);
  }

   update(question: Question): Observable<Question> {
    return this.http.patch<Question>(`${this.serverAddress}/${question.id}`, question);
  }

   delete(question: Question): Observable<Question> {
    return this.http.delete<Question>(`${this.serverAddress}/${question.id}`);
  }

}
