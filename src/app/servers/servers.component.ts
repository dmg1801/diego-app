import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverName =  'TestServer';

constructor(){
  setTimeout(() => {
    this.allowNewServer = true;  
  }, 2000);
}

ngOninit(){

}


onCreateServer(){
  this.serverCreationStatus = 'Server was created!';
}

onUpdateServerName(event: Event){
  // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}

  serverId: number = 10;
  serverStatus: string = 'offline';
}
