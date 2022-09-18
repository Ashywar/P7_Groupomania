import { PostsService } from './services/post.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  constructor(private postService: PostsService, private auth: AuthService) {}

  ngOnInit(): void {
    this.postService.getPosts();
  }
}
