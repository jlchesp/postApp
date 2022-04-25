import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Page1Component } from './page1.component';
import { PostsService } from 'src/app/services/posts.service';
import { of } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';

const POSTS_MOCK: Post = {
  userId: 1,
  id: 1,
  title: 'title 1',
  body: 'body 1'
};

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;
  let service: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    service = TestBed.inject(PostsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test para comprobar que se está haciendo la llamada al endpoint con spyOn y respuesta mockeada
  it('should get posts', () => {
    const spyGetPosts = spyOn(service, 'getPosts').and.returnValue(of(POSTS_MOCK));
    component.getPosts();
    expect(spyGetPosts).toHaveBeenCalled();
  });
});
