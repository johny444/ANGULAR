import { Component, OnInit } from '@angular/core';
import { PostService } from '../SERVICES/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.postservice.getListPost().subscribe(console.log)
  }

}
