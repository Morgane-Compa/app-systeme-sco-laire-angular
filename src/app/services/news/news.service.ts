import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { News } from 'src/app/models/news';
import { NEWS_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    console.log("getNews")
    return this.http.get<{data:News[]}>(NEWS_URL).pipe(map(response => response.data));
  };

  addNews(news: News): Observable<News> {
    return this.http.post<News>(NEWS_URL, news);
  };

  deleteNews(id: number): Observable<void> {
    const url = `${NEWS_URL}/${id}`;
    return this.http.delete<void>(url);
  };

  updateNews(news: News): Observable<News> {
    const url = `${NEWS_URL}/${news.id}`;
    return this.http.put<News>(url, news);
  };

}
