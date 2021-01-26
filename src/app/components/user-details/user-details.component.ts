import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser = null;
  isUpdated = false;
  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.userService.get(id).subscribe(
      data => {
        this.currentUser = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  updateUser(): void {
    this.userService.update(this.currentUser.id, this.currentUser).subscribe(
      response => {
        console.log(response);
        this.message = "The user was updated successfully!";
      }, error => {
        console.log(error);
      }
    );
    this.isUpdated = true;
  }

  deleteUser(): void {
    this.userService.delete(this.currentUser.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/users']);
      }, error => {
        console.log(error);
      }
    );
  }
}
