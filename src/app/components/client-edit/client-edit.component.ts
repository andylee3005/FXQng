import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  currentClient = null;
  isUpdated = false;
  message = '';

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorageServices: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getClient(this.route.snapshot.paramMap.get('id'));

    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  getClient(id): void {
    this.clientService.getById(id).subscribe(
      data => {
        this.currentClient = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  updateClient(): void {
    this.clientService.edit(this.currentClient.id, this.currentClient).subscribe(
      response => {
        console.log(response);
        this.message = "Client successfully updated!";
      }, error => {
        console.log(error);
      }
    );
    this.isUpdated = true;
  }

  deleteClient(): void {
    this.clientService.delete(this.currentClient.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/clients/list']);
      }, error => {
        console.log(error);
      }
    );
  }
}
