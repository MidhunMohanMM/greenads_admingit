import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeusersgateways',
  templateUrl: './changeusersgateways.component.html',
  styleUrls: ['./changeusersgateways.component.css']
})
export class ChangeusersgatewaysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addManually(){
    
    $("#addmanually").addClass('todo-completed');
  }

}
