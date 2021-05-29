import { Component, Input, OnInit } from '@angular/core';
import { EvidencesService } from "../../shared/evidences.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { Evidences } from '../../models/evidences';
import { NgModule} from '@angular/core'

import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css'],
  
})
export class EvidenceComponent implements OnInit {
  
  @Input() identifier = '';

  selectedStatus!: string;
  statuses = ["draft", "active", "retired", "unknown"];
  constructor(public service: EvidencesService, private firestore:AngularFirestore){ }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      resourceType: "Evidence",
      status: "unknown",
      exposureBackground: {}
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('Evidences').add(data);
    this.resetForm(form);
  }
}

