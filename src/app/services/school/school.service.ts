import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { School } from 'src/app/models/school';
import { SCHOOL_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor( private http: HttpClient) { }

  getAllSchools(): Observable<School[]> {
    return this.http.get<{data:School[]}>(SCHOOL_URL).pipe(map(response => response.data));
  }

  getSchoolById(id: number): Observable<School> {
    return this.http.get<{data:School}>(`${SCHOOL_URL}/${id}`).pipe(map(response => response.data));
  }
}
