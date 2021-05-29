import { Injectable } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Evidences } from '../models/evidences';



@Injectable({
  providedIn: 'root'
})

export class EvidencesService {

  formData: Evidences | undefined;

  constructor(private firebase:AngularFirestore, ) {}

  //evidenceList!: AngularFireList<any>;

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

  instertEvidence(evidence: Evidences){
    return this.firebase.collection("evidences").add(evidence);
    /*this.evidenceList?.push({
      identifier: evidence.identifier,
      name: evidence.name,
      title: evidence.title,
      status: evidence.status,
      date: evidence.date,
      effectivePeriod: evidence.effectivePeriod,
      exposureBackground: evidence.exposureBackground
    })*/
  }

  updateEvidence(evidence: Evidences){
    /*this.evidenceList.update(evidence.$key!,{
      identifier: evidence.identifier,
      name: evidence.name,
      title: evidence.title,
      status: evidence.status,
      date: evidence.date,
      effectivePeriod: evidence.effectivePeriod,
      exposureBackground: evidence.exposureBackground
    })*/
  }

  deleteEvidence($key:string){
    /*this.evidenceList.remove($key);*/
  }
}
