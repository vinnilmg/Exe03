import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';

/**
 * Generated class for the CadastrarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-livros',
  templateUrl: 'cadastrar-livros.html',
})
export class CadastrarLivrosPage {

  //O cadastro sera postado na API, pensar em alguma forma de vincular com o Ator, ou adicionar campos no cadastro do Livro
  autor: Autor = {
    nome: '', nascimento: 1800, descricao: 'Teste'
  }
  editora: Editora = {
    nome: '', descricao: 'Teste'
  }

  livro: Livro = {
    titulo: '', subtitulo: '', capa: '', editora: this.editora,
    autor: this.autor, isbn: '', publicacao: '',
    paginas: null,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) { }


  openAlert() {
    if(this.livro.titulo){
    let addToAlert = this.alertController.create({
      title: 'Livro Cadastrado com Sucesso',
      subTitle: 'O Livro '+ this.livro.titulo + ' foi cadastrado com sucesso',
      buttons: ['Ok']
    
    });

    addToAlert.present();
  }
  else {
    let addToAlert = this.alertController.create({
      title: 'Livro não cadastado por falta de dados!',
    
      buttons: ['Ok']
    
    });

    addToAlert.present();

  }
  }

  logForm() {
    console.log(this.livro)
    this.openAlert();
    this.navCtrl.pop();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLivrosPage');

  }

}
