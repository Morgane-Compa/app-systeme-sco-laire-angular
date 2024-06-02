import { Component, OnInit  } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent {

  newsList: News[] = [];
  filteredNewsListBySchool: News[] = [];
  filteredNewsListByclassroom: News[] = [];
  errorMessage: string | null = null;
  schoolId: number = 1;
  classroomId: number = 1;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews().subscribe({
      next: (news) => {
        this.newsList = news;
        this.filteredNewsListBySchool = this.newsList.filter(newsItem => newsItem.school_id === this.schoolId);
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while loading news';
        console.error('Error loading news:', err);
      }
    });
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

  updateNews(updatedNews: News): void {
    this.newsService.updateNews(updatedNews).subscribe({
      next: (news) => {
        const index = this.newsList.findIndex(newsItem => newsItem.id === news.id);
        if (index !== -1) {
          this.newsList[index] = news;
          this.filteredNewsListBySchool = this.newsList.filter(newsItem => newsItem.school_id === this.schoolId);
        }
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while updating the news';
        console.error('Error updating news:', err);
      }
    });
  }
}

