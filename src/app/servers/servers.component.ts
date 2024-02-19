import { Component,OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector:'app-servers',
  // template: `<app-server></app-server>
  // <h6> this is the javascript notation</h6>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  AllowNewServer:boolean=false;
  serverCreationStatus='No server was created!';

  constructor(){
    setTimeout(() => {
      this.AllowNewServer=true;
    }, 2000);

  }
  onCreatiinServer() {
    this.serverCreationStatus = 'server was created!'

  }

ngOnInit(){
 

}
}
