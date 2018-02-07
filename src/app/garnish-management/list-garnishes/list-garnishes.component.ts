import { Component, OnInit } from '@angular/core';
import { GarnishService } from '../garnish.service';
import { GarnishDTO } from '../models/garnish.dto';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { CreateGarnishComponent } from '../create-garnish/create-garnish.component';

@Component({
  selector: 'app-list-garnishes',
  templateUrl: './list-garnishes.component.html',
  styleUrls: ['./list-garnishes.component.css']
})
export class ListGarnishesComponent implements OnInit {

  garnishesDataSource = new GarnishDataSource(this.garnishService);
  garnishesAttributes = ['Name', 'Description'];

  constructor(private garnishService: GarnishService, private dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    console.log('Abre modal');
    const dialogRef = this.dialog.open(CreateGarnishComponent, {
      width: '350px', height: '350px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.garnishesDataSource = new GarnishDataSource(this.garnishService);
    });
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
