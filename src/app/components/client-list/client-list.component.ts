import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  clients: any;
  currentClient = null;
  currentIndex = -1;

  constructor(private clientService: ClientService, private tokenStorageServices: TokenStorageService) { }

  ngOnInit(): void {
    this.getClients();

    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  getClients(): void {
    this.clientService.getAll().subscribe( 
      data => {
        this.clients = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.getClients();
    this.currentClient = null;
    this.currentIndex = -1;
  }

  setActiveClient(client, index): void {
    this.currentClient = client;
    this.currentIndex = index;
  }

  deleteClient(client, index): void {
    this.clientService.delete(this.currentClient.id).subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error);
      });
  }

}
