import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  users: any;
  currentUser = null;
  currentIndex = -1;

  constructor(private userService: UserService, private tokenStorageServices: TokenStorageService) { }

  ngOnInit(): void {
    this.getUsers();

    this.isLoggedIn = !!this.tokenStorageServices.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageServices.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  getUsers(): void {
    this.userService.getAll().subscribe( 
      data => {
        this.users = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.getUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  deleteUser(user): void {
    this.userService.delete(this.currentUser.id).subscribe(
      response => {
        console.log(response);
        this.refreshList();
      }, error => {
        console.log(error);
      });
  }
  
}
