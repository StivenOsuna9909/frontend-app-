import { Component, Input, OnInit } from '@angular/core';
import { Transf } from '../../interfaces/interfaces';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {

  @Input() transf: Transf = {};
  

  constructor() { }

  ngOnInit() {}

}
