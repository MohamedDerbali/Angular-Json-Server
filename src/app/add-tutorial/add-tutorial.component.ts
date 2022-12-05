import { Component, Input, OnInit } from '@angular/core';
import { ToutorielService } from '../toutoriel.service';
import { Tutorial } from '../tutoriel';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  @Input() tutorial: Tutorial = {
    title: '',
    description: '',
  };
  constructor(private tutorialService: ToutorielService) {}

  ngOnInit(): void {}

  saveTutorial() {
    this.tutorialService.addTutorial(this.tutorial).subscribe((data) => {
      location.href = 'http://localhost:4200';
    });
  }
}
