import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/app.component';

@Component({
  selector: 'ce-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() ELEMENT_DATA?: Array<PeriodicElement>;
  displayedColumns: string[] = ['position', 'name', 'category', 'quantity'];
  dataSource!: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(
      this.ELEMENT_DATA
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    console.log(this.dataSource);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
