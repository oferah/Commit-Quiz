import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Question } from '../models/question';
import { QuestionAnswer } from '../models/question-answer';

@Injectable()
export class QuizService {

    constructor(private http: HttpClient) { }

    getQuizQuestionList(): Observable<Question[]> {
        return this.http.get<Question[]>('app/_quiz/data/question-list.json').pipe(
            switchMap((questions: Question[]) => {
                return of(questions);
            }));
    }

    getQuizAnswers(): Observable<QuestionAnswer[]> {
        return this.http.get<QuestionAnswer[]>('app/_quiz/data/quiz-answer.json').pipe(
            switchMap((answers: QuestionAnswer[]) => {
                return of(answers);
            }));
    }

}

