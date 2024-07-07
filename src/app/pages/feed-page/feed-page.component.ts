import { Component, OnInit  } from '@angular/core';
import { News } from 'src/app/models/news';
import { User } from 'src/app/models/user';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent {

  user?: User;
  userId: number | null = null;
  newsList: News[] = [];
  filteredNewsListBySchool: News[] = [];
  // filteredNewsListByclassroom: News[] = [];
  errorMessage: string | null = null;
  schoolId?: number;
  userNames: Map<number, string> = new Map();
  showModal = false;

  constructor(private userService: UserService, private newsService: NewsService) {}

  ngOnInit(): void {
    this.getSchoolIdAndLoadNews();
  }

  getSchoolIdAndLoadNews(): void {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      this.userId = Number(storedUserId);
    }
    if (this.userId !== null && !isNaN(this.userId)) {
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          this.user = data.data;
          if (this.user && this.user.school_id) {
            this.schoolId = this.user.school_id;
            console.log(this.schoolId);
            this.loadNews();
          }
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  } 

  loadNews(): void {
    if (!this.schoolId) {
      console.error('School ID is not set');
      return;
    }
    this.newsService.getNews().subscribe({
      next: (news) => {
        this.newsList = news;
        this.filteredNewsListBySchool = this.newsList.filter(newsItem => newsItem.school_id === this.schoolId);
        this.filteredNewsListBySchool.forEach(newsItem => {
          this.loadUserName(newsItem.user_id);
        });
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while loading news';
        console.error('Error loading news:', err);
      }
    });
  }

  loadUserName(userId: number): void {
    if (!this.userNames.has(userId)) {
      this.userService.getUserById(userId).subscribe(
        (data) => {
          this.userNames.set(userId, data.data.firstname + " "+ data.data.lastname);
          console.log(this.userNames)
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
    }
  }

  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.filteredNewsListBySchool = this.filteredNewsListBySchool.filter(newsItem => newsItem.id !== id);
        this.newsList = this.newsList.filter(newsItem => newsItem.id !== id);
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while deleting the news';
        console.error('Error deleting news:', err);
      }
    });
  }
  
  onNewsCreated(news: News) {
    this.newsList.unshift(news);
    this.filteredNewsListBySchool = this.newsList.filter(newsItem => newsItem.school_id === this.schoolId);
    this.loadNews();
  }
}

