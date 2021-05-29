import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EvidencesSimplified } from 'src/app/models/evidences-simplified';
import { EvidencesService } from 'src/app/shared/evidences.service';
import { map } from 'rxjs/operators';
import { EvidenceComponent } from '../evidence/evidence.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';




@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.css']
})
export class EvidenceListComponent implements OnInit {

  constructor(private service: EvidencesService,
    private dialog: MatDialog) { }
  evidenceArray = new MatTableDataSource<EvidencesSimplified>();

  displayedColumns: string[] = ['identifier', 'name', 'title', 'status', 'date', 'effectivePeriod', 'exposureBackground', 'actions'];
  
  ngOnInit(): void {
    setTimeout(()=>console.log(this.evidenceArray),2000);

    this.getEvidences();
  }

  getEvidences = () => this.service.getEvidences()
  .pipe(
    map(docData => { 
    return docData.map(evidence => {
        let data = evidence.payload.doc.data() as EvidencesSimplified;
        return {...data,
          date: (data as {date: any}).date.toDate(),
        effectivePeriod: (data as {date: any}).date.toDate()}
      }
    )
  })).subscribe(docData =>{
    this.evidenceArray.data = docData
  })

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; 
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EvidenceComponent, dialogConfig);
  }

  onEdit(row:EvidencesSimplified){
    console.log(row);
    
    setTimeout(() => this.service.populateForm(row), 500);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; 
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EvidenceComponent, dialogConfig);
  }
}
