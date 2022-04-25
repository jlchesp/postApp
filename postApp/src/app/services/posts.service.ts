import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post, User } from '../interfaces/interfaces';

//Servicio que utilizaremos para hacer todas las llamadas a la API de la documentación
//Lo más correcto sería guardar las rutas en variables, pero por ahorrar tiempo, las he copiado y pegado
const URL = environment.url;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts');
    }

    getUsers() {
        return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
    }

    getComments() {
        return this.http.get<Comment>('https://jsonplaceholder.typicode.com/comments');
    }
}