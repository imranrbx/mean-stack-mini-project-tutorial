import { TasksService } from './../Services/tasks.service';
import { TasksModel } from './../tasks';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatSnackBar,
  MatSort
} from '@angular/material';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'title',
    'isCompleted',
    'created_at',
    'updated_at',
    'action'
  ];
  dataSource: MatTableDataSource<TasksModel>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  message: any;
  constructor(
    private tasksService: TasksService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.AllTasksList();
  }
  AllTasksList() {
    this.tasksService.Tasks.subscribe(tasks => {
      if (!tasks) {
        return;
      }
      this.dataSource = new MatTableDataSource<TasksModel>(tasks);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  updateTask(task: any) {
    this.tasksService.changeStatus(task).subscribe(message => {
      this.snackBar.open(message.message, 'Close', {
        duration: 2000
      });
    });
  }
  deleteTask(id) {
    const check = confirm('Are You Sure, You want to Delete this Record ?');
    if (check === true) {
      return this.tasksService.delTask(id).subscribe(message => {
        this.snackBar.open(message.message, 'Close', {
          duration: 2000
        });
        this.AllTasksList();
      });
    }
    return;
  }
  TaskAdded(e) {
    console.log('Test: ' + e);
    if (e === true) {
      this.AllTasksList();
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
