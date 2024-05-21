import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class QuizGameService {
    constructor (private http: HttpClient) {
    }

    public getQuizs (): Observable<any> {
        return this.http.get('./assets/quiz.mock.json')

    }
}