import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EvidencesSimplified } from '../models/evidences-simplified';



@Injectable({
  providedIn: 'root'
})

export class EvidencesService {

  formData: EvidencesSimplified | undefined;

  constructor(private firebase:AngularFirestore, ) {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    identifier: new FormControl(''),
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    title: new FormControl(''),
    status: new FormControl('1', Validators.required),
    date: new FormControl(''),
    effectivePeriod: new FormControl(''),
    exposureBackground: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
 
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      identifier:'',
      name: '',
      title: '',
      status: '1',
      date:'',
      effectivePeriod: '',
      exposureBackground: '',
    })
  }

  getEvidences(){   
    return this.firebase.collection('evidences').snapshotChanges();
  }

  instertEvidence(evidence: EvidencesSimplified){
    return this.firebase.collection("evidences").add(evidence);
  }

  updateEvidence(evidence: EvidencesSimplified){

  }

  deleteEvidence($key:string){
  }
}
