import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material/table';

const MaterialComponent = [
    MatTableModule
];

@NgModule({
  imports: [
    MatTableModule
  ],
  exports: [
    MatTableModule
  ]
})
export class MaterialModule { }
