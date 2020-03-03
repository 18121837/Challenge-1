# Challenge 1 - SpaceX Dashboard HHS

Student: 18121837 - Patrick Picavet

## Uitleg

Ik heb voor mijn html een aantal article's aangemaakt om hierin de vershillende grafieken weer te geven.
Zo kan Elon Musk precies de belangrijkste waardes zien van zijn ruimteschip.

Zoals hieronder te zien is in mijn html gebruik ik een canvas om mijn grafieken weer te geven. Toen ik eenmaal 1 grafriek kon weergeven kon ik dit makkelijk kopiëren en toepassen om andere grafieken weer te geven.

```html
 <main>
        <article id="distance">
            <h2>Distance</h2>
            <canvas id="afstand"></canvas>
        </article>
```

 ### JavaScript
 
 Voor de JavaScript heb ik gebruik gemaakt van een bestaande database genaamd Charts.js. Dit is een openbare tool waarbij je op een iets makkelijkere manier gebruik kan maken van grafieken in je JavaScript. Het was wel even lastig om hier mee om te gaan maar door het constant proberen en hulp van andere is het toch gelukt om het te realiseren.
 Om de charts.js toe te voegen moet je deze in de head van je index.html zetten zoals alle andere links die je moet toevoegen.
 
 ```HTML
 <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>
 ```
 
 Een voorbeeld hier beneden over hoe ik bijvoorbeeld een grafiek heb gemaakt.
 
 ```JavaScript
function functionSpeed() {
    var speedChart = document.getElementById('snelheid').getContext('2d');
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#fff';
    var massPopChart = new Chart(speedChart, {
        type: 'line'
        , data: {
            labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
            , datasets: [
                {
                    label: "Falcon 9"
                    , fillColor: '#fff'
                    , borderColor: 'RGBA(74,185,192,0.50)'
                    , backgroundColor: 'RGBA(74,185,192,0.20)'
                    , pointColor: 'rgba(74, 185, 192, 1)'
                    , pointStrokeColor: '#fff'
                    , pointHighlightFill: '#fff'
                    , pointHighlightStroke: 'rgba(74, 185, 192, 1)'
                    , data: [200, 230, 400, 420, 430, 500, 550, 570, 600, 800]
            }
        , ]
        }
    });
}
```

Allereerst heb ik een function aangemaakt om de grafiek later op te roepen in mijn code. Vervolgens een variabele aangemaakt die staat aangegeven op de website van Charts.js. Door het goed lezen op de site van Charts.js kun je precies zien hoe je bepaalde punten in een grafiek kan aanpassen zoals de kleur van de lijn of de puntjes die in de lijn grafiek zitten. 

Het belangrijkste is de data attribuut daarin zijn de belangrijkste waardes die worden toegevoegd aan de grafieken.

Hierbij het linkje naar mijn Dashboard: https://18121837.github.io/Challenge-1/
