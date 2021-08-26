import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../store';
import { User } from '../store/users';
import { actionGetUser } from '../store/users/actions';
import { selectUser } from '../store/users/selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<AppState>,
    private route: ActivatedRoute
  ) { }

  public username: string = 'huseyinkeles';
  public user: User | undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['username'])
      this.username = params['username']
    })
    this.ngRedux.dispatch(actionGetUser(this.username));
    this.ngRedux.select(selectUser(this.username)).subscribe( (data: User | undefined) => {
      console.log(data)
      this.user = data;
    })
  }

}