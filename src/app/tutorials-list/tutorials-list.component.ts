import { Component, Input, OnInit } from '@angular/core';
import { ToutorielService } from '../toutoriel.service';
import { Tutorial } from '../tutoriel';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  @Input() search: any;
  tutorials: Tutorial[] = [];
  currentTutorial: Tutorial | undefined;
  constructor(private tutorielService: ToutorielService) {}

  ngOnInit(): void {
    this.tutorielService.getTutorials().subscribe((data) => {
      this.tutorials = data;
    });
  }

  selectTechnlogy(technology: any) {
    this.tutorielService.getTutorial(technology.id).subscribe((data) => {
      this.currentTutorial = data;
    });
  }

  searchTutorials(e: any) {
    if (this.search) {
      this.tutorials = this.tutorials.filter((t) => {
        return t.title.toLowerCase().includes(this.search.toLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }

  removeAllTutorials() {
    this.tutorials = [];
  }

  updateTutorial() {
    location.href = `http://localhost:4200/update/${this.currentTutorial?.id}`;
  }
}
