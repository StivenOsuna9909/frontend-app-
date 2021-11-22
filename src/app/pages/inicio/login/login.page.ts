import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email:'testlogin@hotmail.com',
    password: '123456'
  }

  constructor(
    public modalCtrl: ModalController, usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  login(){
  }
 


  async dismiss() {
    await this.modalCtrl.dismiss();
  }


  mostrarLogin(){

  }
}
