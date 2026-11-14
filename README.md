# Cellule in equilibrio

Web app didattica per il Liceo Galilei di Verona, indirizzo sportivo. A cura del prof. Andrea Bertelli. Materiali di partenza del progetto AIRC nelle scuole. Testi, schemi, simulazioni, casi e quiz originali. Il sito include bibliografia con link alle fonti e una sezione privacy, cookie e IA.

## Avvio

Estrai lo ZIP e apri `index.html`. Per provare le pagine tramite HTTP, esegui `python3 -m http.server 8000` nella cartella estratta e visita http://localhost:8000. Il sito usa solo HTML, CSS e JavaScript. Font e logo sono locali. Non occorrono pacchetti, account per gli studenti o chiavi API.

## GitHub e Vercel

1. Crea un repository GitHub. Può restare privato anche se il sito viene pubblicato. Carica i file estratti, mantenendo la cartella `assets`. Metti `index.html` e `vercel.json` nella radice del repository.
2. In Vercel seleziona **Add New → Project**, importa il repository e scegli **Other** come framework, con la radice del repository come **Root Directory**. Lascia vuoti i comandi di installazione e build. Il file `vercel.json` indica la radice come directory di output e definisce le intestazioni.
3. Controlla visibilità e protezione dei deployment nel progetto Vercel prima di condividere il link. La visibilità del repository e quella del sito sono impostazioni distinte.
4. Per il controllo finale, apri il sito e prova i laboratori e il ripasso. Nella scheda Network del browser verifica le richieste e l’assenza di intestazioni `Set-Cookie` introdotte dalla configurazione pubblicata. Tieni disattivati Web Analytics, Speed Insights, integrazioni e widget di terzi se vuoi mantenere il comportamento descritto nel sito.

Documentazione Vercel: https://vercel.com/docs/builds/configure-a-build

## Prima della diffusione

Completa la verifica editoriale e scientifica con il docente. Per una pubblicazione istituzionale, conferma con la scuola l'uso del logo fornito e completa l'informativa con i dati effettivi del titolare e i contatti, le finalità e basi giuridiche, destinatari, eventuali trasferimenti, conservazione, diritti e recapiti del DPO ove applicabili. I log tecnici e le eventuali misure di protezione dipendono dalla configurazione di hosting e vanno verificati sul deployment. L’app non registra risultati e non chiede informazioni personali. La dichiarazione nel sito segnala l’uso di IA nella preparazione dei contenuti. Mantieni l’attribuzione AIRC e i riferimenti scientifici.

Il video rimane ospitato su Google Drive. Il player incorporato contatta Google quando lo studente seleziona «Carica il player». I PDF AIRC restano nelle fonti di partenza. Lo ZIP contiene la rielaborazione originale e il link al portale AIRC, senza redistribuire i materiali originali. Gli esempi numerici e clinici dei laboratori sono inventati.

## File

- `index.html` struttura, guida docente e privacy
- `style.css` impaginazione e accessibilità visiva
- `contenuti.js` unità, casi, domande e riferimenti
- `app.js` laboratori, quiz e modello 3D
- `assets/` logo Galilei e carattere Open Sans con licenza
- `vercel.json` configurazione per hosting statico
