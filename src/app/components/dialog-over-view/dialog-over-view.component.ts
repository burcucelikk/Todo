/*import { DialogData } from './../home/home.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentimplements implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverViewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-dialog-over-view',
  templateUrl: './dialog-over-view.component.html',
  styleUrls: ['./dialog-over-view.component.scss']
})
export class DialogOverViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
