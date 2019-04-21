import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LivroProvider {

  private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('Hello LivroProvider Provider');
  }

  getSomeBooks() {
    return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:0451526538,ISBN:0201558025,ISBN:9780980200447,ISBN:0385472579&format=json&details=true');
  }

  getBooksCodes(){
    return null
  }

}
