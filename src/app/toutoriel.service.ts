import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './tutoriel';
@Injectable({
  providedIn: 'root',
})
export class ToutorielService {
  constructor(private http: HttpClient) {}

  public getTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>('http://localhost:3000/tutorials');
  }

  public getTutorial(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>(`http://localhost:3000/tutorials/${id}`);
  }

  public addTutorial(tutorial: Tutorial) {
    return this.http.post('http://localhost:3000/tutorials', tutorial);
  }
  
  public updateTutorial(tutorial: Tutorial) {
    return this.http.put(
      `http://localhost:3000/tutorials/${tutorial.id}`,
      tutorial
    );
  }

  public deleteTutorial(id: number) {
    return this.http.delete(`http://localhost:3000/tutorials/${id}`);
  }
}
