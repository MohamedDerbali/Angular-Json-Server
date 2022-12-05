import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToutorielService } from '../toutoriel.service';
import { Tutorial } from '../tutoriel';

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.css'],
})
export class UpdateTutorialComponent implements OnInit {
  tutorialId: number = 0;
  @Input() tutorial: Tutorial = {
    id: 0,
    title: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private tutorialService: ToutorielService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tutorialId = parseInt(params['id']);
    });
    this.tutorialService.getTutorial(this.tutorialId).subscribe((data) => {
      this.tutorial = data;
    });
  }

  editTutorial() {
    this.tutorialService.updateTutorial(this.tutorial).subscribe((data) => {
      location.href = 'http://localhost:4200';
    });
  }

  deleteTutorial() {
    this.tutorialService.deleteTutorial(this.tutorialId).subscribe((data) => {
      location.href = 'http://localhost:4200';
    });
  }
}
