import { Component, OnInit } from '@angular/core';
import {QuizzService} from '../services/quizz.service';
import { Pregunta } from '../model/pregunta';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  preguntas: Pregunta[];
  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.quizzService.getQuizz()
    .subscribe(response => { 
      console.log(response);
      this.preguntas = response;
      console.log(this.preguntas.length);
      this.preguntas.map(pregunta => {
        console.log('pregunta: '+ pregunta.pregunta);
        var respuestas = '';
        pregunta.respuestas.map( respuesta => {
          respuestas+=respuesta.respuesta+' ';
        })
        console.log(respuestas);
      })
    },
    erro => {
      alert('El usuario y contraseña no coinciden');
    });
  }

}
