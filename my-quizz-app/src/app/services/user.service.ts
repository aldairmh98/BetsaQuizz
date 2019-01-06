import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://quizzer.appspot.com/';
   }

   login(username, password): Observable<Usuario> {
    let urlhit = this.url;
    urlhit += 'login?username=' + username + '&password=' + password;
    return this.http.get<Usuario>(urlhit);
    }

    getOne(id): Observable<Usuario> {
      let urlhit = this.url;
      urlhit += 'usuarios?id=' + id;
      console.log(urlhit);
      return this.http.get<Usuario>(urlhit);
    }
  create(user: Usuario) {
    let urlhit = this.url;
    urlhit += 'usuarios';
    return this.http.post(urlhit, user);
  }

  update(user: Usuario, id) {
    let urlhit = this.url;
    urlhit += 'usuarios?id_usuario=' + id;
    return this.http.put(urlhit, user);
  }

  delete(id: number) {
    let urlhit = this.url;
    urlhit += 'usuarios?id=' + id;
    return this.http.delete(urlhit);
  }

}
