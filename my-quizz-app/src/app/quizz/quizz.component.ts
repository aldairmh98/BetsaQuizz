import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizzService } from '../services/quizz.service';
import { Pregunta } from '../model/pregunta';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  //Variables visible html.
  preguntas: Pregunta[];
  isFetched = false;
  current_pregunta: Pregunta;
  btn_navigate_txt: string;
  resultado = 0;
  preguntaid: number;
  
  //Variables para ts
  private sub: any;
  private respuestas = [];
  

  //Constructor
  constructor(private quizzService: QuizzService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    this.init();
  }

  private init(){
    this.sub = this.route.params.subscribe(params => {
      this.preguntaid = +params['id'];
      if (this.preguntaid === 0) {
        this.current_pregunta= null;
        this.isFetched= false;
        this.resultado = 0;
        this.fetch_data();
        this.btn_navigate_txt = 'Siguiente';
      } else{
        try{
          if(this.preguntaid<this.preguntas.length){
            this.current_pregunta = this.preguntas[this.preguntaid]; 
          }
          if(this.preguntaid+1===this.preguntas.length){
            this.btn_navigate_txt = 'Resultados';
          }
      }
      catch{
        this.preguntaid = 0;
        this.router.navigate(['/quizz',0]);
      }
      }
    },
      err => {
      }
    );
  }
  private fetch_data() {
    this.quizzService.getQuizz()
      .subscribe(response => {
        this.preguntas = response;
        this.current_pregunta = this.preguntas[0];
        this.isFetched = true;
        console.log(response);
      },
      erro => {
        alert('El usuario y contraseña no coinciden');
      });
  }

  onSelect(pregunta, respuesta) {
    this.respuestas[this.preguntaid] = respuesta.bandera;
  }

  navigate() {
    if(this.preguntaid+1 < this.preguntas.length){
      if(!this.respuestas[this.preguntaid])
      {
        this.respuestas[this.preguntaid] = false;
      }
      this.router.navigate(['/quizz', this.preguntaid + 1]);
    }
    else{
      this.current_pregunta = null;
      //Calcula resultados
      for(var i = 0; i<this.respuestas.length;i++){
        if(this.respuestas[i]){
          this.resultado ++;
        }
      }
    }
  }
}
