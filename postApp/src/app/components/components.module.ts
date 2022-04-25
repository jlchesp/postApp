import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';



@NgModule({
    declarations: [
        PostsComponent,
        PostComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PostsComponent,
        PostComponent,
    ]
})
export class ComponentsModule { }