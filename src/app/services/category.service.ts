/*import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  addCategory(obj) {
    return this.http.post(this.apiUrl + '/todo', obj);
  }

  getAllCategory() {
    return this.http.get(this.apiUrl + '/todo');
  }

  updateCategory(obj) {
    return this.http.put(this.apiUrl + '/todo', obj);
  }

  removeCategory(id) {
    return this.http.delete(this.apiUrl + '/todo/' + id);
  }
}*/
