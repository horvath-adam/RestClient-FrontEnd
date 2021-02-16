import { Component } from '@angular/core';
import {ExampleSerivce} from '../service/example-serivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  examples: string[] = [];
  example: string = '';
  exampleId: number | undefined;
  newExample: string = '';
  editExample: string = '';
  editExampleId: number | undefined;
  deleteExampleId: number | undefined;


  newExampleStatus = 'Felvitel állapota';
  editExampleStatus = 'Módosítás állapota';
  deleteExampleStatus = 'Törlés állapota';

  constructor(private exampleService: ExampleSerivce) {

  }


  getExamples(): void {
    this.exampleService.getAllExamples().subscribe(res => {
      this.examples = res;
    });
  }

  getExample(): void {
    if (this.exampleId) {
      this.exampleService.getExample(this.exampleId).subscribe(res => {
        this.example = res.key;
      });
    }
  }

  addExample(): void {
    this.exampleService.addExample(this.newExample).subscribe(res => {
      this.newExampleStatus = 'OK';
    }, error => {
      this.newExampleStatus = 'HIBA';
    });
  }

  edtExample(): void {
    if (this.editExampleId) {
      this.exampleService.editExample(this.editExample, this.editExampleId).subscribe(res => {
        this.editExampleStatus = 'OK';
      },
        error => {
          this.editExampleStatus = 'HIBA';
        });
    }
  }

  deleteExample(): void {
    if (this.deleteExampleId) {
      this.exampleService.deleteExample(this.deleteExampleId).subscribe(res => {
        this.deleteExampleStatus = 'OK';
        },
        error => {
          this.deleteExampleStatus = 'HIBA';
        });
    }
  }
}
