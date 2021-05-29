import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { EvidenceComponent } from './evidences/evidence/evidence.component';
import { EvidencesService } from './shared/evidences.service';
import { EvidencesComponent } from './evidences/evidences.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    EvidenceComponent,
    EvidencesComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [EvidencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
