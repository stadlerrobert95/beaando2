import { Component, Input, OnInit } from '@angular/core';
import { EvidencesService } from "../../shared/evidences.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { Evidences } from '../../models/evidences';
import { NgModule} from '@angular/core'
import { NotificationService} from '../../shared/notification.service';
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
  statuses = [
    {id: 1, value: "draft"}, 
    {id: 2, value: "active"}, 
    {id: 3, value:"retired"}, 
    {id: 4, value:"unknown"}];
  constructor(public service: EvidencesService, private firestore:AngularFirestore, private notificationService: NotificationService){ }

  ngOnInit(): void {
    this.resetForm();
    this.service.getEvidences();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
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

  onSubmit(){
      let data = this.service.form.value;
      
      this.service.instertEvidence(data).then(
        res=>{          
        this.onClear;
        this.notificationService.success('Submitted successfully')})
  }
}

