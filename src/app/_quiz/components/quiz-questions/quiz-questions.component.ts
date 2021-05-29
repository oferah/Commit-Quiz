import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question';
import { QuestionAnswer } from '../../models/question-answer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  questions: Question[];
  currentQuestionIndex: number = 0;
  firstQuestionId: number;
  lastQuestionId: number;

  answers: { [questionId: number]: number } = {};

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.quizService.getQuizQuestionList().subscribe((questions: Question[]) => {
      this.questions = questions;

      if (this.questions.length > 0) {
        this.firstQuestionId = this.questions[0].questionId;
        this.lastQuestionId = this.questions[this.questions.length - 1].questionId;

      }


    });
  }

  optionSelected(questionId: number, optionId: number) {
    this.answers[questionId] = optionId;
  }

  gotoNextQuestion() {
    this.currentQuestionIndex++;
  }

  gotoPreviousQuestion() {
    this.currentQuestionIndex--;
  }

  submitQuiz() {
    this.quizService.getQuizAnswers().subscribe((questionAnswers: QuestionAnswer[]) => {
      const grade: number = this.calcQuizGrade(questionAnswers);
      this.router.navigate(['/quiz/quiz-results', grade]);
    });
  }
  calcQuizGrade(questionAnswers: QuestionAnswer[]): number {
    const numberOfQuestions: number = questionAnswers.length;
    let correctAnswers: number = 0;

    console.log(questionAnswers);

    for (const questionAnswer of questionAnswers) {
      console.log('questionAnswer.questionId: ' + questionAnswer.questionId + ' - ' + questionAnswer.optionId);
      if (this.answers[questionAnswer.questionId] === questionAnswer.optionId) {


        correctAnswers++;
      }
    }

    console.log('correctAnswers: ' + correctAnswers + ' numberOfQuestions: ' + numberOfQuestions);

    return correctAnswers / numberOfQuestions * 100;
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

}
