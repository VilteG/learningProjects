import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from  '../../models/Post';

import { PostService} from '../../services/post.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService:PostService) { }  
  @Output() newPost:EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost:EventEmitter<Post> = new EventEmitter();
  @Input() currentPost:Post; // property of the form component
  @Input() isEdit:boolean;

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert('please enter post')
    }else{
      this.postService.savePost({title,body} as Post).subscribe
      (post=> {
        this.newPost.emit(post);
      })
    }
  }

  updatePost(){
    this.postService.updatePost(this.currentPost).subscribe(
      post=> {
        console.log(post);
        this.isEdit=false;
        this.updatedPost.emit(post);
      }
    );
  }

  
}
