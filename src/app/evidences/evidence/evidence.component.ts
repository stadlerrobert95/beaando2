import { Component, Input, OnInit } from '@angular/core';
import { EvidencesService } from "../../shared/evidences.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { Evidences } from '../../models/evidences';
import { NgModule} from '@angular/core'
import { NotificationService} from '../../shared/notification.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css'],
  
})
export class EvidenceComponent implements OnInit {
  
  @Input() identifier = '';

  selectedStatus!: string;
  statuses = [
    {id: 1, value: "draft"}, 
    {id: 2, value: "active"}, 
    {id: 3, value:"retired"}, 
    {id: 4, value:"unknown"}];
    
  constructor(public service: EvidencesService, 
    private firestore:AngularFirestore, 
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<EvidenceComponent>){ }

  ngOnInit(): void {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.service.getEvidences();
  }

  onClear(){
    console.log("Cleared");
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  onSubmit(){
    console.log("Submitted");
      let data = this.service.form.value;
      if (!this.service.form.get('$key')?.value)
        this.service.instertEvidence(this.service.form.value)
      else 
        this.service.updateEvidence(this.service.form.value)
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Submitted successfully')
      this.onClose();
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

