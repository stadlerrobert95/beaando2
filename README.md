# Beaando2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Egyéni pontozás:
Fordítási hiba: nincs 
<br>Futtatási hiba: nincs
<br>Firebase Hosting URL (létezik, és minden komponens megfelelő módon betöltődik): Coospace
<br>Adatmodell definiálása (TypeScript interfész vagy class formájában): src/app/models/evidences.ts illetve egy egyszerűsített evidences-simplified.ts
<br>Alkalmazás felbontása megfelelő számú komponensre (egyetlen komponens TS és HTML kódja sem haladja meg a 250 sort és soronként a 400 karaktert): Done
<br>Reszponzív, mobile-first felület (minden adat látható és jól jelenik meg böngészőben is, mobil nézetben is): Done (650px szélesség és 500px magasság felett szépen működik)
<br>Legalább 1 attribútum direktíva használata: src/app/directives/highlight.directive.ts
<br>Legalább 2 különböző strukturális direktíva használata: ngFor(src\app\evidences\evidence\evidence.component.html), ngIf(src\app\evidences\evidence\evidence.component.html)
<br>Adatátadás meghívott komponensnek (legalább 1 @Input, 1 @Output): Input(src\app\evidences\evidence\evidence.component.ts)
<br>Legalább 5 különböző Material elem helyes használata. SnackBar, Toolbar, Formfield, Button, DatePicker, Table, Dialog és még egy pár (src\app\material\material.module.ts)
<br>Legalább 2 modal (dialog) használata adat beszúrásra (üresen) és szerkesztésre (adattal) :Beszúrás és Szerkesztés(src\app\evidences\evidence-list\evidence-list.component.ts
<br>Adatbevitel Angular form-ok segítségével megvalósítva (legalább 1): (src\app\evidences\evidence\evidence.component.html)
<br>Legalább 1 Pipe írása és használata: DatePipe (src\app\evidences\evidence-list\evidence-list.component.html) és StatusPipe (src\app\evidences\evidence-list\evidence-list.component.html def:src\app\pipes\status-pipe.pipe.ts)
<br>Legalább 3 különböző Lifecycle Hook használata a teljes projektben: ngOnInit (több helyen), ngOnDestroy
<br>CRUD műveletek mindegyike megvalósult (Promise, Observable használattal): (src\app\shared\evidences.service.ts)
<br>CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek: (src\app\shared\evidences.service.ts)
<br>Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen): Firestore...
<br>Legalább 2 komplex Firestore lekérdezés megvalósítása, amely indexet igényel (ide tartoznak: where feltétel, rendezés, léptetés, limitálás): Nincs
<br>Legalább 4 különböző route a különböző oldalak eléréséhez: Nincs
<br>Szubjektív pontozás a projekt egészére vonatkozólag: --inprogress--
