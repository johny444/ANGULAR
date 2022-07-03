import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostEntityModel } from '../models/post-entity-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getListPost():Observable<PostEntityModel[]> {
    return this.httpClient.get<PostEntityModel[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
