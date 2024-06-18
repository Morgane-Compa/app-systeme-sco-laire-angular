import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Classroom } from 'src/app/models/classroom';
import { CLASSROOM_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  getAllSchools(): Observable<Classroom[]> {
    return this.http.get<{data:Classroom[]}>(CLASSROOM_URL).pipe(map(response => response.data));
  }

  getSchoolById(id: number): Observable<Classroom> {
    return this.http.get<{data:Classroom}>(`${CLASSROOM_URL}/${id}`).pipe(map(response => response.data));
  }
}
