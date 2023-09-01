import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  @Input({ required: false }) activeFocus: boolean = false;
  @Input({ required: true }) placeholder: string = "";
  @Input({ required: true }) control!: AbstractControl<string | null, string | null> | null;

  constructor() { }

  ngOnInit() {
}

}
