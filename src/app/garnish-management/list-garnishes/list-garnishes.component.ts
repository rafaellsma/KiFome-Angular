import { Component, OnInit } from '@angular/core';
import { GarnishService } from '../garnish.service';
import { GarnishDTO } from '../models/garnish.dto';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-garnishes',
  templateUrl: './list-garnishes.component.html',
  styleUrls: ['./list-garnishes.component.css']
})
export class ListGarnishesComponent implements OnInit {

  garnishesDataSource = new GarnishDataSource(this.garnishService);
  garnishesAttributes = ['Name', 'Description'];

  constructor(private garnishService: GarnishService) {}

  ngOnInit() {
  }

}

class GarnishDataSource extends DataSource<any> {
   constructor(private garnishService: GarnishService){
     super();
   }

   connect(): Observable<GarnishDTO[]> {
     return this.garnishService.getAllGarnishes();
   }

   disconnect() {}
}
