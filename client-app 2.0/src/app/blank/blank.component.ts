import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../shared/requests.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  private valuesList: String[];

  constructor(
    private service: RequestsService
  ) { }

  ngOnInit() {
  }

  testConnection() {
    this.service.testGet().subscribe(res => {
      this.valuesList = res as String[];
    });
  }

}
