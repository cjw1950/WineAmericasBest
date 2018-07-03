import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import {FilterPipe} from  './filter.pipe';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  pipes: [FilterPipe]
})

export class AppComponent {
  title = 'app';
  term;
  array=[];
  constructor(http: Http) {
    http.get('assets/wines.json')
      .pipe(map(res => res.json()))
      .subscribe((array) =>{ this.array = array
       console.log(array)
      });
    }
}

