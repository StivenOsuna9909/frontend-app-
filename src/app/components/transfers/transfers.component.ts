import { Component, Input, OnInit } from '@angular/core';
import { Transf } from '../../interfaces/interfaces'; 

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {


  @Input() trans: Transf[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.trans);
  }

}
