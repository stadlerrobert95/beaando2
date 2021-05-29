import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evidences } from 'src/app/models/evidences';
import { EvidencesService } from 'src/app/shared/evidences.service';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.css']
})
export class EvidenceListComponent implements OnInit {

  constructor(private service: EvidencesService) { }
  evidenceArray = new MatTableDataSource();

  displayedColumns: string[] = ['identifier', 'name', 'title', 'status', 'date', 'effectivePeriod', 'exposureBackground'];
  
  ngOnInit(): void {
    setTimeout(()=>console.log(this.evidenceArray),2000);

    this.getEvidences();
  }

  getEvidences = () => this.service.getEvidences()
  .pipe(
    map(docData => { 
    return docData.map(evidence => {
        return evidence.payload.doc.data();
      }
    )
  })).subscribe(docData =>{
    this.evidenceArray.data = docData
  })

}
