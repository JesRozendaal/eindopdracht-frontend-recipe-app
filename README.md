# Recipe App

## Inleiding

Weet je niet wat je vanavond moet koken? Geen probleem! Maak gebruik van de recipe app Decision Maker
om recepten te zoek op basis van je stemming, motivatie om te koken, soort keuken en eventuele allergieën.

Nog groente over in je koelkast? Gebruik dan de What's in your fridge? mogelijkheid om recepten te krijgen op 
basis van deze ingrediënten.

Als je een topdag hebt en graag zelf wil zoeken tussen alle recepten kan dit ook.

Ga je mee op reis naar een heerlijke maaltijd?

![screenshot](src/assets/photos/screenshot%20home.JPG)

De applicatie maakt gebruik van de NOVI backend. 
Omdat deze de aangemaakte gebruikersgegevens regelmatig verwijderd, zijn er nog geen accounts aangemaakt.
Dit kan je zelf doen op de login/register pagina.

## Stap 1: Applicatie clonen

De applicatie kan je naar jouw locale machine clonen door deze uit Github te halen: https://github.com/JesRozendaal/eindopdracht-frontend-recipe-app

* Klik op de groene knop "Code". 
* Kies vervolgens voor SSH en kopieer de link die verschijnt.
* Openen in Webstorm:
  - Druk op de knop `Get from VCS`
      Plak de link in het veld URL en druk op de knop `Clone`.
  - Zit je reeds in een project, dan:

    Kies in Webstorm voor `Git` => `Clone` en plak de link in het veld URL. Druk nu helemaal onderin op de knop `Clone`.

  

## Stap 2: Gebruik gegevens API

De applicatie maakt gebruik van data uit een API.

Om de alle functies van de applicatie te gebruiken is een API key nodig.
* Open het `.env.dist` bestand. Hierin staat hoe de key aangeleverd moet worden.
* Maak in de hoofdmap van het project een nieuw file/bestand aan genaamd `.env`. 
* Zet hier vervolgens op de aangegeven manier de key in.

De te gebruiken key is: 64b9d798657c4f318e70de4bdedc004b

_**Let op:**_ De gratis versie van deze API geeft maar 150 punten per dag. Als bij het ophalen van de
gegevens dit maximum bereikt is, werkt het ophalen niet meer.
Mocht dit gebeuren, kan er eventueel nog gebruik gemaakt worden van een andere API key, namelijk: 5cbe2b0a91474f24bb6f9115a087e84a
Ook deze heeft maximaal 150 punten per dag.

## Stap 3: Applicatie starten

Voor het gebruik van de applicatie zijn verschillende packages nodig, namelijk:
* axios
* react-router-dom
* jwt-decode

Deze zijn allemaal reeds aanwezig in het project.

Om de packages te kunnen gebruiken, moet je na het clonen van het project naar jouw locale machine eerst de `node_modules` installeren door het volgende
commando in de terminal te runnen:

```
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van het commando:

```
npm start
```

De applicatie verschijnt nu vanzelf in je browser.

Of gebruik de WebStorm knop (npm start). Open [http://localhost:3000](http://localhost:3000/) om de pagina in de browser
te bekijken.



## Stap 4: Applicatie bekijken

De applicatie is nu klaar om te bekijken.

Happy cooking! 😃 🍕
