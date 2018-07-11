import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-builders',
  templateUrl: 'builders.html',
})
export class BuildersPage {

  public loginForm: any;
  public msgSenha: string;
  public erroSenha:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      usuario:['', Validators.compose([Validators.minLength(4), Validators.maxLength(8), Validators.required])],
      senha:['', Validators.compose([Validators.minLength(4), Validators.maxLength(8), Validators.pattern("[0-9]{4,8}")])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildersPage');
  }

  public fazLogin(){
    this.erroSenha=false;
    let {usuario, senha} = this.loginForm.controls;
    if(!senha.valid){
      this.msgSenha = "senha fora do padrão";
      this.erroSenha = true;
    }
  }
}
