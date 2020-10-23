import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatToolbarModule,MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { from } from 'rxjs';
const material=[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule
  

];
@NgModule({
  
  imports: [material],
  exports:[ material]
})
export class MaterialModule { }
