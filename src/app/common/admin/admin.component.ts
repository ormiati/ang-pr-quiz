import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quiz$: Observable<Quiz[]> = this.quizService.getAll();

  selectedQuiz: Quiz = new Quiz();

  phrase: string='';

  sorting: string='';

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
  }

  onDelete(quiz: Quiz) : void {
    this.quizService.delete(quiz).subscribe(
      ()=>{
        this.quiz$=this.quizService.getAll();
      }
    )
  }

  onChangePhrase(event:Event): void {
    this.phrase=(event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string): void {
    this.sorting = key;
  }

  onUpdate(quiz: Quiz): void {
    this.quizService.update(quiz).subscribe()
  }

  onCreate(quiz: Quiz): void {
    this.quizService.create(quiz).subscribe()
  }

}
