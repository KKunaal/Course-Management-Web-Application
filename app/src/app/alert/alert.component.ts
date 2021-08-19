import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

//  created
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this._alertService.getMessage()
      .subscribe(message => {
        this.message = message;
      });
  }

}
