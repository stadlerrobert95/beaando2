import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { EvidenceComponent } from './evidences/evidence/evidence.component';
import { EvidencesService } from './shared/evidences.service';
import { EvidencesComponent } from './evidences/evidences.component';
import { MaterialModule } from './material/material.module';
import { CleartextComponent } from './cleartext/cleartext.component';
import { EvidenceListComponent } from './evidences/evidence-list/evidence-list.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    EvidenceComponent,
    EvidencesComponent,
    CleartextComponent,
    EvidenceListComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [EvidencesService],
  bootstrap: [AppComponent],
  entryComponents:[EvidenceComponent]
})
export class AppModule { }
