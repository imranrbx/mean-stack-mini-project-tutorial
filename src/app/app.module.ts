import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSortModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './Services/tasks.service';
import { TaskAddComponent, TaskOpenDialog } from './tasks/task-add.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddComponent,
    TaskOpenDialog
  ],
  entryComponents: [TaskOpenDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
