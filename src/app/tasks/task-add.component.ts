import { TasksService } from './../Services/tasks.service';
import { TasksModel } from './../tasks';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() AddTaskEvent = new EventEmitter<boolean>();
  title: string;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskOpenDialog, {
      width: '250px',
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.AddTaskEvent.emit(true);
      }
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {}
}

@Component({
  selector: 'app-task-modal',
  templateUrl: 'task.modal.component.html'
})
export class TaskOpenDialog {
  constructor(
    public dialogRef: MatDialogRef<TaskOpenDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TasksModel,
    public tasksService: TasksService,
    public snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddTask(task: any) {
    this.tasksService.AddTask(task).subscribe(message => {
      this.snackBar.open(message.message, 'Close', {
        duration: 2000
      });
      this.dialogRef.close(true);
    });
  }
}
