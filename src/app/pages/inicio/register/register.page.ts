import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  register(fRegistro: NgForm){
    console.log( fRegistro.valid );

  }

  mostrarRegistro(){

  }


  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

}
