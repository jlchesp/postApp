import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

//En este componente haremos la llamada al servicio de post e implementaremos los componentes anteriores
//Funciona como página principal
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  posts: any;

  constructor(private postsService: PostsService) { }

  //Inicializamos el componente con la llamada a todos los posts
  ngOnInit(): void {
    this.getPosts();
  }

  //Función para llamar al servicio de posts y guardarlos en una variable que utilizaremos en el HTML
  getPosts() {

    this.postsService.getPosts()
      .subscribe(res => {
        this.posts = res;
      });
  }

}
