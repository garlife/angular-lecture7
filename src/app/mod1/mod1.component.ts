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
      name: [null, Validators.required],
      description: fb.control(undefined, Validators.required),  //тоже самое что написать ['']
      phones: fb.array([['+79991234567'], ['+79991234568'], ['+79991234569']]),
      age: fb.control(null, [Validators.min(10), Validators.max(100)]),
      title: [{value:null, disabled:true},Validators.required]
    });
    this.formBuilder1.get('name').valueChanges.subscribe(value => {
      if (value === 'Привет'){
        this.formBuilder1.get('description').setValue('Приветствие');
      }
    })
  }

  ngOnInit(): void {}

  get getPhones(): FormArray {
    return this.formBuilder1.get('phones') as FormArray;
  }

  get getAge(): FormControl {
    return this.formBuilder1.get('age') as FormControl;
  }

  toggleDE () {
    if (this.formBuilder1.get('title').enabled) {
      this.formBuilder1.get('title').disable();
    }
    else this.formBuilder1.get('title').enable();
    ;
  }

  refresh() {
    this.formBuilder1.reset(); 
  }
}
