import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./sever.component.html'
})
export class ServerComponent{
   
    serverId:number=10;
    serverStatus:string='Offline';

    gettheServrStatus()
    {
        return this.serverStatus;
    }
}