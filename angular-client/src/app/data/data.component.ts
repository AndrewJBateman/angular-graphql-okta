import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Apollo } from 'apollo-angular';
import { PARTS_LIST } from 'src/app/graphql/graphql.queries';
import { Part } from './models/part.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  parts: any[] = [];
  loading = true;
  error: any;

  // Material table setup
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (part: Part) => `${part.name}`,
    },
    {
      columnDef: 'quantity',
      header: 'Qty',
      cell: (part: Part) => `${part.quantity}`,
    },
    {
      columnDef: 'weight',
      header: 'Kg',
      cell: (part: Part) => `${part.weight}`,
    },
    {
      columnDef: 'criticalPart',
      header: 'Critical',
      cell: (part: Part) => `${part.criticalPart}`,
    },
  ];
  displayedColumns: string[] = ['name', 'quantity', 'weight', 'criticalPart', 'createdDate'];
  dataSource!: MatTableDataSource<Part>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: PARTS_LIST,
      })
      .valueChanges.subscribe((result: any) => {
        this.parts = result?.data?.parts;
        this.dataSource = new MatTableDataSource(this.parts);
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
