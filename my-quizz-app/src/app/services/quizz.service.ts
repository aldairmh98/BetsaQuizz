import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Quizz } from '../model/quizz';
import { Pregunta } from '../model/pregunta';
@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'https://quizzer.appspot.com/';
  }

  getQuizz(){
    let hiturl = this.url;
    hiturl += 'quizz';
    return this.http.get<Pregunta[]>(hiturl);
  }
}           
