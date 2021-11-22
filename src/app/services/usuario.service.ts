import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SQLite } from '@ionic-native/sqlite/ngx';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  constructor( private http: HttpClient, private sqlite: SQLite  ) { }

  login( email: string, password: string ){

    const data = { email, password };
    this.http.post(`${ URL }/user/login`, data).subscribe( resp => {
      console.log(resp);
    });
  }

}
