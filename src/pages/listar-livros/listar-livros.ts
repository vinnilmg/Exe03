import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { LivrosPage } from '../livros/livros';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';
import { LivroProvider } from '../../providers/livro/livro';

/**
 * Generated class for the ListarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-livros',
  templateUrl: 'listar-livros.html',
  providers: [
    LivroProvider
  ]
})
export class ListarLivrosPage {
  public livros: Livro[];
  public lista_livros = new Array<any>();
  public lista_hash = new Array<any>();

  autor: Autor = {
    nome: 'Teste', nascimento: 9999, descricao: 'Teste'
  }
  editora: Editora = {
    nome: 'Teste', descricao: 'Teste'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private livroProvider: LivroProvider) {

  }

  irParaDestino(livro: Livro) {

    this.navCtrl.push(LivrosPage, { "meulivrinho": livro })
    console.log("Abrir pagina de livro")
  }

  ionViewDidLoad() {
    this.livroProvider.getSomeBooks().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
        console.log(this.lista_livros.length)
      }, error => {
        console.log(error)
      }
    )
    console.log('ionViewDidLoad ListarLivrosPage');
  }

}
