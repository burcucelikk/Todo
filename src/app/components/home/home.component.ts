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
  categories : any;
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

  addTodo(todo) {
    const obj = { 
      name: todo.value,
      isComplete: false  
    };
      
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
    this.categories = this.todoService.categories;
    console.log( this.categories )

    this.todoService.getAllTodos()
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          this.data[key] = res[key];
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



