import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  inputFocus = false;

  @Input({ required: false }) activeFocus: boolean = false;
  @Input() passwordEquals = true;
  @Input({ required: true }) type: string = "";
  @Input({ required: true }) placeholder: string = "";
  @Input({ required: true }) control!: AbstractControl<string | null, string | null> | null;
  @Input() className: string = "";
  constructor() { }

  updateControlValue(newValue: string) {
    if (this.control) {
      this.control.setValue(newValue);
    }
  }

  ngOnInit() {}

  onTouched() {
    this.inputFocus = true;
  }

}
