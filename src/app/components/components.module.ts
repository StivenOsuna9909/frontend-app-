import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer/transfer.component';
import { IonicModule } from '@ionic/angular';
import { TransfersComponent } from './transfers/transfers.component';



@NgModule({
  declarations: [ TransfersComponent, TransferComponent ],
  exports:[TransferComponent, TransfersComponent ],

  imports:[CommonModule, IonicModule, ]

})
export class ComponentsModule { }
