# User Stories

* Als Veranstalter möchte ich eine Veranstaltung (Name, Beschreibung, Zielgruppe, Beitrag, Ort, Datum/Zeit, Kommentar) erfassen können, sodass Gäste sich über meine Veranstaltung informieren können.

Done.

* Als Veranstalter möchte ich die maximale Anzahl Gäste eines Anlasses beschränken können, damit sich nicht mehr Gäste anmelden, als meine Veranstaltung Platz bieten kann.

Done. Please Verify


* Als Veranstalter möchte ich sehen können, wie viele Gäste sich für meine Veranstaltung angemeldet haben und was sie mitbringen, damit ich die Veranstaltung entsprechend vorbereiten kann.

Done. Please Verify

* Als Gast möchte ich eine Übersicht über die aktuellen Veranstaltungen erhalten, um mich für eine interessante Veranstaltung anmelden zu können.

Done.

* Als Gast möchte ich mich für eine Veranstaltung anmelden können, um daran teilnehmen zu können und mitzuteilen, was ich mitbringen werde oder einen Kommentar zu hinterlassen.

Done. Please Verify

* Als Gast möchte ich meine Anmeldung editieren können, um etwas anderes mitbringen zu können oder den Kommentar anzupassen.

Done

* Als Gast möchte ich eine Anmeldung canceln können, sodas der Gastgeber sieht, wer sich wieder abgemeldet hat.

Done.

* Als Gast möchte ich sehen können, was andere Gäste mitbringen, um nicht das Gleiche mitzubringen.

Done

# Kriterien

Damit Sie das Testat erfolgreich abschliessen können, muss Ihre Applikation die folgenden Kriterien erfüllen:

* Die Applikation funktioniert in Firefox und Chrome (FF 40+, GC 45+).
* Alle User-Stories wurden umgesetzt.
* Die Applikation ist als Client-Server Applikation aufgebaut. Die Client-Applikation basiert auf AngularJS/JavaScript.
* Die Applikation nutzt eine REST-Schnittstelle zum Datenaustausch mit dem Server (Persistenz). Ein Node.js-Server wird von uns vorgegeben, es ist jedoch auch erlaubt, eine eigene Implementation zu erstellen (beliebige Technologie), welche die gleiche REST-Schnittstelle anbietet. Der von uns angebotene Node.js Server darf auch verändert/erweitert werden.
* Zur Kommunikation mit dem Server wird der AngularJS Ajax Service verwendet.
* Zur Verwaltung der Events und Gäste werden Services/Repositories eingesetzt.
* Die Applikation besteht aus mindestens vier verschiedenen Views. Mindestens zwei Views manipulieren Daten (Forms). Zur Navigation zwischen den Views wird die Routing Komponente von Angular eingesetzt.
* Die Benutzeroberfläche besitzt mindestens ein funktionales, minimales Styling. CSS-Frameworks wie Foundation oder Bootstrap dürfen verwendet werden (keine Bootstrap JS!).
* Responsive Design (360px*576px - 1920px*1080).
* Für Formulare wird, wo sinnvoll, HTML5-Formvalidierung + AngularJS Formvalidierung verwendet.
* Für mindestens folgende Aktionen/Komponenten existieren Jasmine-Tests mit gemockten Services:
 * Test der Scope Variablen auf Korrektheit/Vollständigkeit im List-Controller mit mindestens 3 Datensätzen (Events).
 * Create Event View: Test über erfolgreiches Anlegen eines neuen Events
 * Add Guest View: Test über erfolgreiches Hinzufügen eines neuen Gastes
 * Test jeder Repository-Methode/API-Calls mit gemocktem $httpBackend.

# Zusätzliche Hinweise/Regeln

* Teamarbeit: Mindestens 2 Personen, höchstens 3 Personen. Alle Personen müssen sich zu gleichen Teilen am Projekt beteiligen.

OK

* CSS Präprozessoren wie Less oder Sass sind erlaubt.

OK

* JavaScript Precompiler wie TypeScript oder CoffeeScript sind erlaubt. Dart ist nur als Präprozessor erlaubt (nicht mit Dartium-Browser).

OK

* RequireJS wird als Module-Loader verwendet.

TODO

* Nebst Angular sind keine anderen Client-JavaScript-Frameworks/Libraries wie z.B. jQuery, ExtJS etc. erlaubt.

Done

* Für Page-Layouts dürfen keine CSS Floats, display-inline-block oder Tabellen eingesetzt werden.

So far OK

* Die Projektsource muss auf dem HSR Gitserver oder einem öffentlichen Gitserver wie GitHub oder GitBucket abgelegt werden und dem Übungsbetreuer muss Zugriff auf das Repository freigeschalten werden.

Done
