import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server>
  <h6> this is the javascript notation</h6>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
constructor(){}

ngOnInit(){

}
}
