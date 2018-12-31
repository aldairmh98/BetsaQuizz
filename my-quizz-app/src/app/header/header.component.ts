import { Component, OnInit } from '@angular/core';
import {QuizzService} from '../services/quizz.service';
import { Pregunta } from '../model/pregunta';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private preguntas: Pregunta[];
  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    
  }

}
