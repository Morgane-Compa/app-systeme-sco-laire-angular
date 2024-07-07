import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/models/news';
import { User } from 'src/app/models/user';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-adding-modal-component',
  templateUrl: './adding-modal-component.component.html',
  styleUrls: ['./adding-modal-component.component.scss']
})
export class AddingModalComponentComponent {
  user?: User;
  userId: number | null = null;
  school_id?: number | null = null;

  @Input() news?: News;
  @Output() closeModal = new EventEmitter<void>();
  @Output() newsCreated = new EventEmitter<News>();
  @Output() newsUpdated = new EventEmitter<News>();
  newsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private userService: UserService
  ) {
    this.newsForm = this.fb.group({
      news_text: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.getInfoProfile();
    if (this.news) {
      this.populateForm(this.news);
    }
  }

  close() {
    this.closeModal.emit();
  }

  getInfoProfile() {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      this.userId = Number(storedUserId);
    }
    if (this.userId !== null && !isNaN(this.userId)) {
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          this.user = data.data;
          this.school_id = this.user.school_id;
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  }

  submitNews(): void {
    if (this.newsForm.valid && this.user && this.user.id !== undefined && this.user.school_id !== undefined) {
      const newNews: News = {
        news_text: this.newsForm.value.news_text,
        image: this.newsForm.value.image,
        user_id: this.user.id,
        school_id: this.user.school_id,
        classroom_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      };

      if (this.news) {
        newNews.id = this.news.id;
        this.newsService.updateNews(newNews).subscribe(
          (updatedNews: News) => {
            this.newsUpdated.emit(updatedNews);
            this.close();
          },
          (error) => {
            console.error('Error updating news', error);
          }
        );
      } else {
        this.newsService.createNews(newNews).subscribe(
          (news: News) => {
            this.newsCreated.emit(news);
            this.close();
          },
          (error) => {
            console.error('Error creating news', error);
          }
        );
      }
    }
  }

  populateForm(news: News) {
    this.newsForm.patchValue({
      news_text: news.news_text,
      image: news.image
    });
  }
}
