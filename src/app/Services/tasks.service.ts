import { TasksModel } from './../tasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private _http: HttpClient) {}
  get Tasks(): Observable<TasksModel[]> {
    return this._http.get<TasksModel[]>('http://localhost:3000/api/task');
  }
  changeStatus(task: TasksModel): Observable<any> {
    task.isCompleted = task.isCompleted === true ? false : true;
    return this._http.put<any>(
      `http://localhost:3000/api/task/${task._id}`,
      task
    );
  }
  AddTask(task: TasksModel): Observable<any> {
    return this._http.post('http://localhost:3000/api/task', task);
  }
  delTask(id): Observable<any> {
    return this._http.delete(`http://localhost:3000/api/task/${id}`);
  }
}
