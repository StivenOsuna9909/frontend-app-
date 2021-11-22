import { Component, OnInit } from "@angular/core";
import { Transf } from "src/app/interfaces/interfaces";
import { TransfersService } from "src/app/services/transfers.service";

@Component({
  selector: "app-historic",
  templateUrl: "./historic.page.html",
  styleUrls: ["./historic.page.scss"],
})
export class HistoricPage implements OnInit {
  trans: Transf[] = [];

  habilitado = true;

  constructor(private transfersService: TransfersService) {}

  ngOnInit() {
    this.siguientes();
  }

  recargar( event ){

    this.siguientes( event, true );
    this.habilitado = true;
    this.trans = [];

  }

  siguientes(event?, pull: boolean = false) {


    this.transfersService.getTransfers( pull ).subscribe((resp) => {
      console.log(resp);
      this.trans.push(...resp.transf);

      if (event) {
        event.target.complete();

        if (resp.transf.length === 0) {
          this.habilitado = false;
        }
      }
    });
  }
}
