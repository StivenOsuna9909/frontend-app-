import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { RespuestaTrans } from "../interfaces/interfaces";

const URL = environment.url;

@Injectable({
  providedIn: "root",
})
export class TransfersService {


  paginaTransfers = 0;

  constructor(private http: HttpClient) {}
  getTransfers( pull: boolean = false ) {

    if( pull){
      this.paginaTransfers = 0;  
    }

    this.paginaTransfers ++;
    return this.http.get<RespuestaTrans>(`${ URL }/transferencia?pagina=${ this.paginaTransfers }`);
  }
}
