import { Component } from '@angular/core';

@Component({
    selector:'app-Warning-alert',
    template:`
    <p>This is the warning You are in danger!</p>
    `,
    styles:[`p{
        padding:20px;
        background-color:mistyrose;
        border:10px solid red;
    }`]
    
})


export class WarningAlertComponent{

}