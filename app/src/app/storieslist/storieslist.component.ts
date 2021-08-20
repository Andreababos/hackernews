import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { getTopStories } from '../store/stories/actions';
import { selectStories } from '../store/stories/selectors';
import { Story } from '../store/stories';

@Component({
  selector: 'app-storieslist',
  templateUrl: './storieslist.component.html',
  styleUrls: ['./storieslist.component.scss']
})
export class StorieslistComponent implements OnInit {

  public stories: Story[] = [];

  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  ngOnInit(): void {
    this.stories = selectStories(this.ngRedux.getState())
  }

}
