import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  categories : any = [
    {
      id: 1,
      name : "Cat 1"
    },{
      id: 2,
      name : "Cat 2"
    },{
      id: 3,
      name : "Cat 3"
    }
  ];
  dizi : any = [];
  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  addTodo(obj) {
    this.dizi.push({
      category_id : obj["category_id"] ,
      todo : obj["todo"]
    })
  console.log(this.dizi)
    return this.http.post(this.apiUrl + '/api/TodoItems', obj);
  }

  getAllTodos() {
    console.log("yeniii",this.dizi)
    return this.http.get(this.apiUrl + '/api/TodoItems');
  }

  getAllCategoriesTodos() {
    return this.categories;
  }

  updateTodo(obj) {
    return this.http.put(this.apiUrl + '/api/TodoItems/', obj);
  }

  removeTodo(id) {
    return this.http.delete(this.apiUrl + '/api/TodoItems/' + id);
  }

}
