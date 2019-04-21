import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as CadastrarLivrosPage from '../cadastrar-livros/cadastrar-livros';
import { ListarLivrosPage } from '../listar-livros/listar-livros';

/**
 * Generated class for the LivrariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livraria',
  templateUrl: 'livraria.html',
})
export class LivrariaPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Cadastrar Livros',
        'tipo': 'cadastrar',
        'description': 'Cadastrar',
        'color': '#B22222'
      },
      {
        'title': 'Listar Livros',
        'tipo': 'listar',
        'description': 'Listar',
        'color': '#000000'
      },

    ]

  }

  openFunction(tipo: any) {
    if (tipo == 'cadastrar') {
      this.navCtrl.push(CadastrarLivrosPage.CadastrarLivrosPage)
    } else {
      this.navCtrl.push(ListarLivrosPage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrariaPage');
  }

}
