import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public buttonTextAndInfoPanel = [
    {
      text:false , visibility: false
    },
    {
      text:false , visibility: false
    },
    {
      text:false , visibility: false
    },
    {
      text:false , visibility: false
    },
    {
      text:false , visibility: false
    },
  ];

  public isButtonClicked(show:number){

    this.buttonTextAndInfoPanel[show].text = !this.buttonTextAndInfoPanel[show].text;
    this.buttonTextAndInfoPanel[show].visibility = !this.buttonTextAndInfoPanel[show].visibility;

  }

}
