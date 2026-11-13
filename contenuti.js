"use strict";

const lessons = [
  {
    name: "Biologia", title: "Quando cambiano le regole della cellula",
    intro: "I tumori maligni sono un insieme di malattie. Alcune cellule acquisiscono alterazioni che permettono loro di crescere, sopravvivere e invadere altri tessuti. Un tumore benigno può crescere e causare problemi locali, ma non invade e non dà metastasi. Alcuni tumori maligni, come molte leucemie, non formano una massa solida.",
    scheme: ["DNA e regolazione", "Controlli alterati", "Espansione clonale", "Possibile invasione"],
    tiles: [
      ["Ciclo cellulare", "In G1 la cellula cresce e valuta i segnali. In S copia il DNA. In G2 verifica la preparazione alla divisione. In M separa i cromosomi e si divide. In presenza di alcuni danni, i controlli possono arrestare il ciclo e favorire riparazione, senescenza o morte cellulare programmata (apoptosi)."],
      ["Acceleratori, freni e riparatori", "Un proto-oncogene può diventare un oncogene se la sua attività promuove eccessivamente la crescita. La perdita di funzione di un gene oncosoppressore può indebolire i freni. Un difetto dei sistemi di riparazione può favorire l’accumulo di alterazioni."],
      ["Da dove vengono le alterazioni?", "Possono derivare da errori nella replicazione, invecchiamento ed esposizioni come tabacco o UV. Alcune varianti ereditarie aumentano la predisposizione. Una mutazione può essere neutra oppure dare un vantaggio al clone. L’instabilità genomica indica una maggiore tendenza ad accumulare alterazioni."],
      ["Invasione, metastasi ed eterogeneità", "Le cellule maligne possono invadere i tessuti vicini. Alcune raggiungono altri organi attraverso sangue o linfa e lì riescono a crescere. In uno stesso tumore possono coesistere cloni diversi, con sensibilità diverse alle cure. Anche il microambiente e le difese immunitarie contano."]
    ],
    more: ["Perché un singolo errore di copia raramente basta?", "Di solito servono più cambiamenti nel tempo, insieme a un contesto che consenta al clone di espandersi. Mutazione, vantaggio clonale e malignità sono concetti distinti."],
    refs: [["biologia", "NCI · Biologia del cancro"]]
  },
  {
    name: "Cure", title: "Come si costruisce un percorso di cura",
    intro: "Per molti tumori solidi si esamina un campione di tessuto. L’anatomia patologica aiuta a definire tipo e grado. Lo stadio descrive l’estensione della malattia. In alcuni casi si analizzano biomarcatori per capire quali terapie possono funzionare. Il piano tiene conto anche della salute generale, degli obiettivi e delle preferenze della persona.",
    scheme: ["Campione e diagnosi", "Stadio e biomarcatori", "Piano condiviso", "Valutazione e follow-up"],
    tiles: [
      ["Chirurgia e radioterapia", "La chirurgia rimuove tessuto tumorale quando è indicata. La radioterapia concentra radiazioni su aree definite per danneggiare il DNA delle cellule bersaglio. Possono essere trattamenti principali, complementari o utili a controllare sintomi."],
      ["Chemioterapia e ormonoterapia", "La chemioterapia può interferire con la divisione o la sopravvivenza cellulare e coinvolgere tessuti sani, con effetti variabili. L’ormonoterapia riduce la produzione o l’azione di ormoni quando il tumore dipende da quei segnali."],
      ["Terapie mirate e immunoterapia", "Una terapia mirata agisce su una vulnerabilità del tumore. La presenza di un bersaglio può aiutare a scegliere il farmaco, ma la risposta è variabile. Alcune immunoterapie rimuovono freni alle difese immunitarie. Indicazioni, benefici ed effetti avversi variano."],
      ["Combinazioni, supporto e obiettivi", "Una terapia prima dell’intervento è detta neoadiuvante. Dopo l’intervento, un trattamento adiuvante può ridurre il rischio di recidiva. Il percorso può mirare a guarigione, controllo della malattia o sollievo dei sintomi. Cure di supporto e palliative possono accompagnare altre terapie."]
    ],
    more: ["Ricerca 2025 · Un biomarcatore può cambiare le opzioni?", "In uno studio di fase 2, il blocco di PD-1 ha permesso a parte dei pazienti selezionati con tumori dMMR di evitare l’intervento nel percorso studiato. dMMR significa deficit di riparazione degli appaiamenti errati del DNA. Tumore, stadio, follow-up e selezione dei pazienti limitano la generalizzazione."],
    refs: [["cure", "NCI · Trattamenti e biomarcatori"], ["ricerca", "Cercek et al. · NEJM 2025"]]
  },
  {
    name: "Prevenzione", title: "Ridurre il rischio prima, individuare presto quando serve",
    intro: "La prevenzione primaria interviene sulle esposizioni e sulle infezioni prima della malattia. Lo screening cerca alterazioni precoci nelle persone senza sintomi e nelle fasce per cui è raccomandato. Dopo la diagnosi entrano in gioco follow-up, riabilitazione e supporto. Il rischio riguarda anche l’ambiente e l’accesso ai servizi. Una diagnosi non è una colpa.",
    scheme: ["Ridurre esposizioni", "Vaccinare quando indicato", "Aderire agli inviti di screening"],
    tiles: [
      ["Tabacco, alcol e sole", "Evitare il tabacco e il fumo passivo. Per la prevenzione oncologica è preferibile evitare l’alcol, anche se si tratta di vino o birra. Per gli sport all’aperto, usare ombra, indumenti, cappello e protezione solare, evitando lampade abbronzanti."],
      ["Infezioni e vaccini", "La vaccinazione contro HPV riduce il rischio di tumori legati ai tipi virali coperti. La vaccinazione contro epatite B previene un’infezione che può causare tumore al fegato. Per indicazioni e accesso consultare i servizi vaccinali. Lo screening cervicale rimane rilevante secondo il programma previsto anche per chi è vaccinato."],
      ["Screening organizzati", "In Italia ci sono programmi organizzati per mammella, cervice uterina e colon-retto. Età, intervalli e modalità dipendono dal programma e dal territorio. Un risultato positivo richiede approfondimenti. Falsi positivi, falsi negativi e sovradiagnosi aiutano a capire perché si scelgono popolazioni e test precisi."],
      ["Contesto e salute pubblica", "Spazi senza fumo, accesso ai vaccini, percorsi sicuri per muoversi, ombra negli impianti sportivi e protezione sul lavoro rendono praticabili molte scelte. Anche esposizioni come radon e inquinamento richiedono interventi ambientali e istituzionali."]
    ],
    more: ["Screening e diagnosi precoce sono sinonimi?", "Lo screening si rivolge a persone senza sintomi. La diagnosi precoce comprende anche il riconoscimento e la valutazione tempestiva di sintomi. Uno screening ha un bilancio tra benefici e possibili danni che dipende dal contesto."],
    refs: [["europa", "IARC · Codice europeo, 5ª edizione"], ["italia", "Ministero della Salute e ULSS 9"]]
  },
  {
    name: "Alimentazione e sport", title: "Le abitudini contano nel tempo",
    intro: "Le evidenze riguardano soprattutto abitudini e contesti ripetuti nel tempo. Per il tumore del colon-retto il WCRF collega cereali integrali e fibre a un rischio minore, e carni lavorate a un rischio maggiore. L’attività fisica è associata a un rischio minore di alcuni tumori, tra cui quello del colon. Gli studi stimano effetti in gruppi di persone.",
    scheme: ["Pasti vari e ricchi di vegetali", "Movimento regolare", "Meno tempo sedentario"],
    tiles: [
      ["Un modello alimentare pratico", "Alterna legumi, cereali integrali, frutta e verdura. Limita carni lavorate come salumi e riduci il consumo di carne rossa. Acqua come bevanda abituale. Un esempio per la trasferta è un panino integrale con hummus e verdure, frutta e acqua, adattato a necessità e orari."],
      ["Cosa dire sui miti", "Lo zucchero nel sangue viene usato anche dalle cellule sane. Escludere i carboidrati non è una cura oncologica. Integratori e superfood non sostituiscono un’alimentazione varia né le cure. Eventuali necessità nutrizionali cliniche si valutano con il team curante."],
      ["Muoversi, anche fuori dall’allenamento", "Per i 5–17 anni l’OMS indica una media di almeno 60 minuti al giorno di attività da moderata a vigorosa, perlopiù aerobica, nella settimana. Attività vigorose e di rinforzo di muscoli e ossa almeno 3 giorni a settimana. Camminare, pedalare e giocare contribuiscono. Il riferimento OMS riguarda la salute generale."],
      ["Dal campo alla ricerca", "Nel trial CHALLENGE, pubblicato nel 2025, un programma strutturato di esercizio dopo la chemioterapia adiuvante in persone selezionate con tumore del colon operato ha migliorato la sopravvivenza libera da malattia. Riguarda il periodo dopo le cure in quella popolazione, distinto dalla prevenzione primaria."]
    ],
    more: ["Perché non basta uno studio su un alimento?", "Conta come è stato misurato il consumo, con cosa viene sostituito quell’alimento, chi è stato studiato e quale esito è stato misurato. Le raccomandazioni sintetizzano più studi e considerano la coerenza delle prove."],
    refs: [["alimentazione", "WCRF · Alimentazione e movimento"], ["oms", "OMS · Attività fisica"], ["ricerca", "Courneya et al. · NEJM 2025"]]
  }
];

const clinical = [
  ["Una massa è localizzata e resecabile. Quale trattamento agisce rimuovendola fisicamente?", ["Radioterapia", "Chirurgia", "Ormonoterapia"], 1, "La chirurgia rimuove la massa. In casi reali la possibilità di operare e l’eventuale combinazione con altre terapie si discutono con il team."],
  ["L’analisi trova una vulnerabilità molecolare con un farmaco appropriato in quello specifico tumore. Quale approccio esemplifica?", ["Terapia mirata", "Screening", "Chirurgia"], 0, "La terapia mirata sfrutta un bersaglio. Il valore del biomarcatore dipende dal tipo di tumore e dalle evidenze cliniche."],
  ["Un farmaco blocca un segnale che frena i linfociti T. Quale meccanismo descrive?", ["Ormonoterapia", "Chemioterapia classica", "Immunoterapia con inibitore dei checkpoint"], 2, "Alcuni inibitori dei checkpoint permettono ai linfociti T di agire contro il tumore. La risposta dipende dal contesto."],
  ["In uno scenario didattico si irradia una zona per controllare una lesione dolorosa. Quale strumento si sta usando?", ["Radioterapia", "Immunoterapia", "Biopsia"], 0, "La radioterapia può essere usata per controllare sintomi, oltre che in percorsi con obiettivi curativi."]
];

const prevention = [
  ["Partita estiva. Il torneo si gioca alle ore di maggiore irraggiamento. Quale misura riduce meglio l’esposizione UV?", ["Offrire solo più acqua", "Spostare l’orario e prevedere ombra e protezione solare", "Fare meno riscaldamento"], 1, "Orario, ombra, abbigliamento e protezione solare riducono l’esposizione ai raggi UV. L’acqua serve per l’idratazione."],
  ["Il servizio sanitario invita una persona asintomatica a un programma per il colon-retto. Di che cosa si tratta?", ["Screening organizzato", "Prevenzione primaria", "Terapia adiuvante"], 0, "Lo screening cerca precocemente alterazioni in una popolazione bersaglio. Un esito positivo richiede un approfondimento."],
  ["La scuola spiega come accedere alla vaccinazione anti-HPV. Quale livello di prevenzione rappresenta?", ["Diagnosi di tumore", "Follow-up", "Prevenzione primaria"], 2, "La vaccinazione agisce prima della malattia riducendo la probabilità di infezioni da tipi di HPV coperti e delle relative conseguenze."],
  ["Un post dice che il 37% indica il rischio personale di avere un tumore. Come lo correggi?", ["È una stima di popolazione dei casi attribuibili ai fattori studiati", "È il rischio di tutti gli adolescenti", "È la probabilità di guarigione"], 0, "La stima OMS/IARC riguarda la quota dei nuovi casi mondiali attribuibili a fattori modificabili esaminati nel 2022."]
];

const menuChoices = [
  ["Base del pasto", [["Pane integrale e hummus", true], ["Panino con salame come scelta abituale", false]]],
  ["Da aggiungere", [["Frutta fresca e verdure", true], ["Integratore al posto di frutta e verdura", false]]],
  ["Bevanda abituale", [["Birra", false], ["Acqua", true]]]
];

const quiz = [
  ["Quale evento identifica la fase S?", ["La cellula copia il DNA", "I cromosomi si separano", "Si forma una metastasi"], 0, "In S si replica il DNA. La separazione dei cromosomi avviene durante la mitosi."],
  ["Che cosa rende una lesione una metastasi?", ["La presenza di qualunque mutazione", "Un aumento di volume locale", "La crescita in un’altra sede di cellule provenienti dal tumore primario"], 2, "La metastasi deriva dalla disseminazione e dalla crescita di cellule del tumore primario in un’altra sede."],
  ["Che cosa descrive lo stadio?", ["L’estensione della malattia", "Il grado di somiglianza delle cellule con il tessuto di origine", "La risposta certa a un farmaco"], 0, "Lo stadio descrive l’estensione. Tipo, grado e biomarcatori sono altre informazioni utili."],
  ["Quale scelta rispecchia meglio le raccomandazioni alimentari?", ["Contare su un superfood", "Varietà di vegetali, legumi e cereali integrali", "Usare integratori al posto dei pasti"], 1, "Il WCRF raccomanda un modello abituale ricco di vegetali e fibre."],
  ["Un test di screening positivo indica…", ["Una diagnosi già confermata", "Che il programma non funziona", "La necessità di approfondire"], 2, "Il test identifica chi può beneficiare degli approfondimenti. Questi chiariscono il significato del risultato."],
  ["Qual è un esempio di prevenzione primaria?", ["Vaccinazione anti-HPV quando indicata", "Biopsia dopo un esame sospetto", "Follow-up dopo terapia"], 0, "La vaccinazione agisce prima dell’insorgenza della malattia."],
  ["Che cosa insegna il trial CHALLENGE?", ["L’esercizio evita qualunque tumore", "Un programma strutturato ha dato benefici nella popolazione studiata dopo le cure", "Lo sport sostituisce la chemioterapia"], 1, "Il trial riguarda pazienti selezionati con tumore del colon operato e chemioterapia adiuvante completata."],
  ["Perché due persone con tumore nello stesso organo possono ricevere terapie diverse?", ["Le terapie si scelgono a sorte", "L’organo decide da solo", "Tipo, stadio, biomarcatori e condizioni della persona possono variare"], 2, "La pianificazione si fonda sulle caratteristiche della malattia e della persona."]
];

const cards = [
  ["Spiega a un compagno il ruolo di un checkpoint.", "È un controllo del ciclo cellulare che può arrestare la progressione, per esempio in presenza di un danno al DNA."],
  ["Fai un esempio di prevenzione primaria e uno di screening.", "Vaccinazione anti-HPV quando indicata. Invito a un test organizzato per la cervice nelle fasce previste."],
  ["Qual è la differenza tra terapia mirata e immunoterapia con inibitori dei checkpoint?", "La prima sfrutta una vulnerabilità biologica specifica. La seconda può ridurre i segnali che frenano l’attività delle difese immunitarie."],
  ["Come spieghi il 37% a una squadra?", "È una stima globale su nuovi casi e fattori modificabili studiati. Non è il rischio personale di ciascun atleta."]
];

const sources = [
  ["airc", "Fondazione AIRC · AIRC nelle scuole", [["Kit didattici e portale ufficiale", "https://www.scuola.airc.it/attivita-didattiche/kit-didattici/"]], "Materiali di partenza forniti dal docente: Cos’è il cancro, Curare il cancro, Come prevenire il cancro, Instabilità genomica, Tabù biologici, Vivere meglio fa bene, Muoversi per vivere bene con guida docente e Ciclo cellulare e cancro. Testi, schemi, casi e giochi di questa app sono originali, sviluppati a partire dai temi dei materiali e da fonti scientifiche."],
  ["biologia", "National Cancer Institute · Basi biologiche", [["What Is Cancer?", "https://www.cancer.gov/about-cancer/understanding/what-is-cancer"]], "Definizioni, alterazioni genetiche, invasione e metastasi."],
  ["cure", "National Cancer Institute · Trattamenti", [["Types of Cancer Treatment", "https://www.cancer.gov/about-cancer/treatment/types"], ["Biomarker Testing", "https://www.cancer.gov/about-cancer/treatment/types/biomarker-testing-cancer-treatment"]], "Meccanismi e ruolo dei biomarcatori nella scelta terapeutica."],
  ["stima", "OMS/IARC e Nature Medicine (2026)", [["Analisi globale del carico attribuibile, DOI 10.1038/s41591-026-04219-7", "https://doi.org/10.1038/s41591-026-04219-7"], ["Sintesi OMS", "https://www.who.int/news/item/03-02-2026-four-in-ten-cancer-cases-could-be-prevented-globally"]], "Stima di popolazione su 30 fattori modificabili e dati del 2022."],
  ["europa", "IARC · Codice europeo contro il cancro, 5ª edizione", [["14 raccomandazioni", "https://cancer-code-europe.iarc.who.int/"]], "Tabacco, alcol, radiazioni UV, ambiente, infezioni e interventi preventivi."],
  ["italia", "Ministero della Salute e ULSS 9 Scaligera", [["Campagna screening oncologici", "https://www.salute.gov.it/new/it/multimedia/campagna-screening-oncologici-uno-screening-puo-salvarti-la-vita/"], ["Vaccinazione anti-HPV a Verona", "https://prenota.aulss9.veneto.it/HPV"]], "Riferimenti istituzionali per i programmi e i servizi."],
  ["alimentazione", "World Cancer Research Fund · Evidenze sulle raccomandazioni", [["Sintesi delle evidenze per singola raccomandazione", "https://www.wcrf.org/research-policy/evidence-for-our-recommendations/"], ["Evidenze sul modello alimentare e sullo stile di vita", "https://www.wcrf.org/research-policy/global-cancer-update-programme/dietary-and-lifestyle-patterns/"]], "Sintesi delle prove sul rischio oncologico."],
  ["oms", "OMS (2020) · Linee guida su attività fisica e sedentarietà", [["Raccomandazioni per età", "https://www.ncbi.nlm.nih.gov/books/NBK566046/"]], "Riferimento per il movimento in età scolare e adolescenziale."],
  ["ricerca", "Studi clinici del 2025 · New England Journal of Medicine", [["Cercek et al. Nonoperative Management of Mismatch Repair-Deficient Tumors", "https://doi.org/10.1056/NEJMoa2404512"], ["Courneya et al. Structured Exercise after Adjuvant Chemotherapy for Colon Cancer", "https://doi.org/10.1056/NEJMoa2502760"]], "Immunoterapia in tumori dMMR selezionati ed esercizio strutturato dopo terapia per il tumore del colon, in popolazioni distinte."],
  ["apprendimento", "Scienze cognitive e apprendimento in classe", [["Agarwal et al. (2021), revisione sistematica sul recupero attivo", "https://doi.org/10.1007/s10648-021-09595-9"], ["Meta-analisi (2025) sulla pratica distribuita in classe", "https://pubmed.ncbi.nlm.nih.gov/40564553/"], ["Revisione e meta-analisi (2025) su recupero attivo ed elaborazione", "https://doi.org/10.1007/s10648-025-10076-6"]], "Fondamento delle scelte su domande prima della rilettura, spiegazione e ripassi distanziati."]
];
