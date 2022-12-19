# ClimateChangeApp - Ilmastonmuutos visualisointityökalu

Tekijät: Lauri Ilkka, Veeti Karnaranta, Tuukka Huru ja Osman Akbaba 

 

## Esittely 

Climate Change App on Oulun ammattikorkeakoulun 2. vuoden ohjelmistokehityksen opiskelijoiden toteuttama sovellusprojekti, jossa tehtiin neljän hengen ryhmätyönä ilmastokuvaajapalvelu. Projektilla ei ollut esikuvia sovelluksen ulkonäölle. Projektissa toteutettiin web-pohjainen REST API -sovellus, jossa kuluttaja-asiakkaat voivat tarkastella ilmastonmuutokseen liittyviä kuvaajia satojen tuhansien vuosien ajalta. Jokainen projektiryhmän jäsen toimi projektissa Full Stack -kehittäjänä työstäen sekä selain- että palvelinpuolta. Projektin frontend toteutettiin käyttäen React.js-nimistä JavaScript-kirjastoa ja backend käyttäen Node.js-ajoympäristöä. Sovelluksen tietokannaksi valikoitui Google Cloud App -SQL-palvelu. 

 

# Sovelluksen Käyttöliittymien Toteutus 

## Ei-kirjautuneen käyttöliittymä 

Ei-kirjautuneen käyttöliittymän yläpalkista löytyvät eri teemoilla olevien ilmastonmuutoksen kuvaajien linkit sekä linkki asiakastilille kirjautumiseen ja sen luomiseen. Etusivun (kuva 1) linkistä “Temperature data” pääsee suoraan lämpötilatietojen ja CO2-pitoisuuksien osioon, josta löytyy kaaviot 1–7 ja 10.  

Yläpalkin toisen linkin “Emission sources” kautta pääsee katsomaan kaavioita päästölähteistä, joihin sisältyvät kaaviot 8 ja 9. Molemmissa linkeissä kaaviot näkyvät allekkain ja kaavioista on lyhyt kuvaileva teksti sekä lähdelinkit. 

![kuva1](https://user-images.githubusercontent.com/98481894/207606482-a6933c2e-e58a-4e66-a183-98be98d9b48e.png)

Kuva 1. Kirjautumis-sivu ja ei-kirjautuneen yläpalkki. 

## Kirjautuneen käyttöliittymä 

Yläpalkissa näkyvät linkit asiakkaan kirjautumiseen ja rekisteröitymiseen. Kirjautumisnäkymä on toteutettu omana linkkinä, joka ohjaa kirjautumissivulle. Kirjautuminen tapahtuu käyttäjänimellä ja salasanalla. Myös kirjautumisnäkymässä on linkki rekisteröitymiseen, mikäli asiakkaalla ei ole vielä tiliä. Onnistuneen kirjautumisen jälkeen sovelluksen yläpalkista poistuu kirjautuminen ja rekisteröityminen ja niiden tilalle tulee Kotisivu- ja Kirjaudu ulos -painikkeet. 

Rekisteröityminen tapahtuu syöttämällä käyttäjänimi ja salasana lomakkeeseen. Sen jälkeen Luo käyttäjä -painiketta painamalla pääsee kirjautumissivulle, josta käyttäjä pääsee kirjautumaan sivustolle. Kirjautumisen jälkeen käyttäjälle aukeaa kotisivu, jossa käyttäjä voi edelleen tarkastella valmiita kaavioita tai luoda niistä oman kokoelman. 

![kuva2](https://user-images.githubusercontent.com/98481894/207606541-bf06facd-b58e-4812-8fbd-248670b50404.png)

Kuva 2. Lämpötilatiedot ja co2 pitoisuudet –osio, missä kaaviot 1-7 ja 10. 

Kotisivunäkymän (kuva 3) yläpalkin alapuolella näkyy tervetuloviesti sekä kirjautuneen käyttäjän käyttäjänimi. Viestin alapuolella näkyy kaavioiden lisäys- ja poistopainikkeita, jotka on värikoodattu vihreäksi ja punaiseksi. Jokaiselle kaaviolle on oma painike, jolla sen voi lisätä tai poistaa. Jokaisen kaavion alapuolella on oma kirjoitusalue, johon käyttäjä voi kirjoittaa muistiinpanoja kaaviosta, jos näin haluaa. Käyttäjä voi lisätä kotisivulleen yhden tai kaikki kaaviot ja tallentaa näkymän. 

Kotisivulla on myös sivun alareunassa molemmin puolin painikkeet, joilla voi poistaa käyttäjän tai vaihtaa kaavioiden näkymää. Poista käyttäjä -painike varmistaa käyttäjältä, haluaako tämä varmasti poistaa käyttäjänsä. Jos käyttäjä vastaa kyllä, käyttäjän tiedot, hänen luomansa visualisoinnit sekä käyttäjän muistiinpanot poistetaan käyttäjältä. 

![kuva3](https://user-images.githubusercontent.com/98481894/207606590-56d83f8a-67e5-4ffe-b9eb-9601f993dcea.png)

Kuva 3. Kotisivu, jossa käyttäjä voi luoda omia visualisointeja, poistaa ja muokata niitä. 

Kaavioiden näkymän vaihtopainike vaihtaa kotisivunäkymää niin, että kaaviot muuttuvat yhden rivin näkymästä vierekkäin kahden rivin näkymään (kuva 4). 

![kuva4](https://user-images.githubusercontent.com/98481894/207606619-72d1e810-df7e-4a86-982d-22d2a20c4855.png)

Kuva 4. Kotisivu eri näkymällä. 

# Dokumentit
## Sovelluksen tietokantarakenne
![TietokantaRakenne](https://user-images.githubusercontent.com/97599254/207616167-e437bb5e-0767-402f-8071-e81a1dcacb54.jpg)
Kuva 5. Tietokantarakenne

[Sovellus pyörii](https://climatechangeapp-370911.ew.r.appspot.com/) Google Cloudin App Enginessä.
