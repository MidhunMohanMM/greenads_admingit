import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {IMyDpOptions} from 'mydatepicker';
import { DataservicesService } from '../services/dataservices/dataservices.service';
@Component({
  selector: 'app-userbydate',
  templateUrl: './userbydate.component.html',
  styleUrls: ['./userbydate.component.css']
})
export class UserbydateComponent implements OnInit {

  public TableDatas ;
  load_data =  false;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(
    private _configs: DataservicesService
  ) { }

  ngOnInit() {
    this._configs.getUsersData().then(rsp => {
      this.TableDatas = rsp;
      console.log(this.TableDatas);
      this.load_data = true;
  });
  }



}
