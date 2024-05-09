import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
  public name: string;
  public surName: string;
  squareRootOfTwo: number;
  public arr: number[];
  public user: { name: string; surn: string };
  public text: string;

  public showName() {
    return 'Olov';
  }
  public isAdmin: boolean;
  public num: number;
  public age: number;
  public day: number;
  public str: string;

  public makeSqrt(num: number) {
    return Math.sqrt(num)
  }

  constructor() {
    this.squareRootOfTwo = Math.sqrt(2);
    this.name = 'john';
    this.surName = 'Smit';
    this.arr = [1, 2, 3, 4, 5];
    this.user = {
      name: 'liza',
      surn: 'romanova',
    };
    this.text = 'abcde';
    this.isAdmin = true;
    this.num = 1;
    this.age = 18;
    this.day = 30;
    this.str = ""
  }
}
