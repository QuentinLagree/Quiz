import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizGameService } from './domain/usescase/quiz.game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  providers: [QuizGameService],
  standalone: true
})
export class AppComponent implements OnInit{

  constructor (private quizGameService: QuizGameService) {}
  ngOnInit(): void {
    this.quizGameService.getQuizs().subscribe(data => {
      console.log(data)
    });
  }
  title = 'Quiz';
  
}
    