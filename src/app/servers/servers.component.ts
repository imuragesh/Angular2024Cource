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
  servername:string='';

  constructor(){
    setTimeout(() => {
      this.AllowNewServer=true;
    }, 2000);

  }
  onCreationServer() {
    this.serverCreationStatus = 'server was created!'+this.servername

  }
  onUpdateSerevrName(event: any) {
    console.log(event)
    // this.servername = event.target.value;
  }

ngOnInit(){
 

}
}
