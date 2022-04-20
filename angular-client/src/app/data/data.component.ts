import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PARTS_LIST } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  parts: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: PARTS_LIST,
      })
      .valueChanges.subscribe((result: any) => {
        this.parts = result?.data?.parts;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
