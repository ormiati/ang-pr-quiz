import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  serverAddress: string ='http://localhost:3000/students';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serverAddress);
  }

  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.serverAddress}/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.serverAddress, student);
  }

   update(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.serverAddress}/${student.id}`, student);
  }

   delete(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${this.serverAddress}/${student.id}`);
  }

}
