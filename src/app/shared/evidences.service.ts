import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Evidences } from '../models/evidences';


@Injectable({
  providedIn: 'root'
})

export class EvidencesService {
  formData: Evidences | undefined;

  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    identifier: new FormControl(''),
    name: new FormControl(''),
    title: new FormControl(''),
    status: new FormControl('1'),
    date: new FormControl(''),
    effectivePeriod: new FormControl(''),
    exposureBackground: new FormControl(''),
  });
   
}
