import {Component, Inject, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TodoService} from '../../services/todo.service';
import {MatSnackBar} from '@angular/material/snack-bar';
/*import {CategoryService} from 'src/app/services/category.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { animate } from '@angular/animations';*/

export interface TodoModel {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value: any;
  categories : any = [];
  data: {[key: string]: TodoModel[]} = {
    done: [],
    pendings: [],
    inProgress: []
  };
  

  constructor(
    private todoService: TodoService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllTodos();
    
    this.todoService.getAllCategoriesTodos()
    .subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.categories.push(res[key]);
      });

    }, (err) => {
      console.log(err);
    });
  }

  drop(event: CdkDragDrop<TodoModel[],any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.updateTodo();
  }

  addTodo(todo, category) {
    const obj = { 
      name: todo.value,
      categoryId : category.value,
      isComplete: false  
    };
      
    console.log(obj)

    this.todoService.addTodo(obj)
      .subscribe((res: any) => {
        this.openSnackBar(res.message);
        this.getAllTodos();
        todo.value = '';
      }, (err) => {
        console.log(err);
      });
  }

  getAllTodos() {
    this.todoService.getAllTodosbyId(2)
      .subscribe((res) => {
        
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    //Buraya ıd gonderıp ona uıygun alıcaksın
    this.todoService.getAllTodos()
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          this.data.pendings[key] = res[key]["name"];
        });

        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  updateTodo() {
    this.todoService.updateTodo(this.data)
      .subscribe((res) => {
      }, (err) => {
        console.log(err);
      });
  }

  removeTodo(id) {
    if (confirm('Bu maddeyi silmek istediğinize emin misiniz?')) {
      this.todoService.removeTodo(id)
        .subscribe((res) => {
          this.getAllTodos();
        }, (err) => {
          console.log(err);
        });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Tamam', {
      duration: 2000,
    });
  }

}



