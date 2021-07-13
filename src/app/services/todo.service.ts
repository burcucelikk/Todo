import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  addTodo(obj) {
    return this.http.post(this.apiUrl + '/api/TodoItems', obj);
  }

  getAllTodos() {
    return this.http.get(this.apiUrl + '/api/TodoItems');
  }
  getAllTodosbyId(id) {
    return this.http.get(this.apiUrl + '/api/TodoItems/'+id);
  }
  getAllCategoriesTodos() {
    return this.http.get(this.apiUrl + '/api/Categories');
  }

  updateTodo(obj) {
    return this.http.put(this.apiUrl + '/api/TodoItems/', obj);
  }

  removeTodo(id) {
    return this.http.delete(this.apiUrl + '/api/TodoItems/' + id);
  }

}
