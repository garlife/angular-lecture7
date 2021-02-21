import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  form1 = { name: '', description: '' };

  reactiveForm1 = new FormGroup({
    name: new FormControl(),
    description: new FormControl(''),
  });

  name: string = '';
  description: string = '';

  formBuilder1: FormGroup;

  //в constructor передаются описания классов

  constructor(fb: FormBuilder) {
    //другой способ записи new FormGroup
    this.formBuilder1 = fb.group({
      name: [''],
      description: fb.control(''), //тоже самое что написать ['']
      phones: fb.array([['+79991234567'], ['+79991234568'], ['+79991234569']]),
      age: fb.control(null, [Validators.min(10), Validators.max(100)]),
    });
  }

  ngOnInit(): void {}

  get getPhones(): FormArray {
    return this.formBuilder1.get('phones') as FormArray;
  }

  get getAge(): FormControl {
    return this.formBuilder1.get('age') as FormControl;
  }
}
