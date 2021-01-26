import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: string;
  currentUser= null;

  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userID = this.token.getUser().id;
    this.getUser();
  }

  getUser(): void {
    this.userService.get(this.userID).subscribe( 
      data => {
        this.currentUser = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
