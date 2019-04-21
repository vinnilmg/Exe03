import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivrariaPage } from '../pages/livraria/livraria';
import { CadastrarLivrosPageModule } from '../pages/cadastrar-livros/cadastrar-livros.module';
import { ListarLivrosPageModule } from '../pages/listar-livros/listar-livros.module';
import { LivrosPageModule } from '../pages/livros/livros.module';
import { AlterarLivroPageModule } from '../pages/alterar-livro/alterar-livro.module';
import { LivroProvider } from '../providers/livro/livro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivrariaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CadastrarLivrosPageModule,
    ListarLivrosPageModule,
    LivrosPageModule,
    AlterarLivroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivrariaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider
  ]
})
export class AppModule {}
