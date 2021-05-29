import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Evidences } from './models/evidences';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beadando';

  evidenceExample: Evidences

  saveData(){
    this.afs.collection('Evidences').add(this.evidenceExample).then(res =>{
      console.log("mentes sikeres", res);
    }).catch(error => {
      console.log('error', error);
    })
  }

  readData(){
    this.afs.collection('Evidences', ref => ref.where("id", ">=", "0").orderBy("id", "asc").orderBy("author", "desc"))
    .get().subscribe(res => {
      res.docs.forEach((el: { data: any; }) => {
        console.log(el.data);
      })
    }), (error: any) => {
      console.log("Kiolvasasi hiba", error);
      
    }
  }

  constructor(private afs: AngularFirestore){
    this.evidenceExample = 
    {
    "resourceType" : "Evidence",
    "url" : "<uri>", // Canonical identifier for this evidence, represented as a URI (globally unique)
    "identifier" : [{ }], // Additional identifier for the evidence
    "version" : "<string>", // Business version of the evidence
    "name" : "<string>", // C? Name for this evidence (computer friendly)
    "title" : "<string>", // Name for this evidence (human friendly)
    "shortTitle" : "<string>", // Title for use in informal contexts
    "subtitle" : "<string>", // Subordinate title of the Evidence
    "status" : "draft", // R!  draft | active | retired | unknown
    "date" : undefined, // Date last changed
    "publisher" : "<string>", // Name of the publisher (organization or individual)
    "contact" : [{  }], // Contact details for the publisher
    "description" : "<markdown>", // Natural language description of the evidence
    "note" : [{ "text" : ""}], // Used for footnotes or explanatory notes
    "jurisdiction" : [{  }], // Intended jurisdiction for evidence (if applicable)
    "copyright" : "<markdown>", // Use and/or publishing restrictions
    "approvalDate" : "<date>", // When the evidence was approved by publisher
    "lastReviewDate" : "<date>", // When the evidence was last reviewed
    "effectivePeriod" : [{ }], // When the evidence is expected to be used
    "topic" : [{  }], // The category of the Evidence, such as Education, Treatment, Assessment, etc.
    "author" : [{  }], // Who authored the content
    "editor" : [{  }], // Who edited the content
    "reviewer" : [{  }], // Who reviewed the content
    "endorser" : [{  }], // Who endorsed the content
    "relatedArtifact" : ["da", "as"], // Additional documentation, citations, etc.
    "exposureBackground" : {  }, // R!  What population?
    "exposureVariant" : [{ }], // What exposure?
    "outcome" : [{ }] // What outcome?
  }
  }
}
