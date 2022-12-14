## ClimateChangeApp - Ilmastonmuutos visualisointityökalu

Tekijät: Lauri Ilkka, Veeti Karnaranta, Tuukka Huru ja Osman Akbaba 

 

## Esittely 

Climate Change App on Oulun ammattikorkeakoulun 2. vuoden opiskelijoiden toteuttama sovellusprojekti, jossa tehtiin neljän hengen ryhmätyönä kuvitteellinen ilmasto kuvaaja palvelu. Projektilla ei ollut esikuvia sovelluksen ulkonäölle mistä ottaa mallia. Projektissa toteutettiin web-pohjainen REST API –sovellus , jossa kuluttaja-asiakkaat voivat tarkastella eri ilmaston muutokseen liittyviä kuvaajia satojen tuhansien vuosien ajalta. Jokainen projektiryhmän jäsen toimi projektissa Full Stack -kehittäjänä, työstäen sekä selain- että palvelinpuolta. Projektin frontend toteutettiin käyttäen React.js-nimistä JavaScript-kirjastoa ja backend käyttäen Node.js-ajoympäristöä. Sovelluksen tietokannaksi valikoitui Google Cloud App cloud SQL palvelu. 

 

# Sovelluksen Käyttöliittymien Toteutus 

## Ei-kirjautuneen käyttöliittymä 

Ei-kirjautuneen käyttöliittymän yläpalkista löytyvät eri teemoilla olevien ilmastonmuutoksen kuvaajien linkit sekä linkki asiakastilille kirjautumiseen ja sen luomiseen. Etusivun (kuva 1) linkistä “N1” pääsee suoraan lämpötilatiedot ja co2 pitoisuudet –osioon, mistä löytyy kaaviot 1-7 ja 10.  

Yläpalkin toisen linkin “N2” kautta pääsee katsomaan kaavioita Päästölähteet, joihin sisältyy kaaviot 8 ja 9. Molemmissa linkeissä kaaviot näkyvät allekkain, sekä kaavioista on lyhyt kuvaileva teksti ja lähde linkit. 

Kolmas linkki “N3” avaa Käyttäjän luoman visualisointinäkymän, joka näyttää käyttäjän määrittelemät visualisointitiedot valitulla asettelulla ja tekstisisällöllä. Näkymä tulee olla saavutettavissa ilman kirjautumista ja julkisella osoitteella. 

![kuva1](https://user-images.githubusercontent.com/98481894/207606482-a6933c2e-e58a-4e66-a183-98be98d9b48e.png)

Kuva 1. Kirjautumis-sivu ja ei-kirjautuneen yläpalkki. 

##Kirjautuneen käyttöliittymä 

Yläpalkissa näkyvät linkit asiakkaan kirjautumiseen ja rekisteröitymiseen. Kirjautumisnäkymä on toteutettu omana linkkinä, joka ohjaa kirjautumis-sivulle. Kirjautuminen tapahtuu käyttäjänimellä ja salasanalla. Myös kirjautumisnäkymässä on linkki rekisteröitymiseen, mikäli asiakkaalla ei ole vielä tiliä. Onnistuneen kirjautumisen jälkeen sovelluksen yläpalkista poistuu kirjautuminen ja rekisteröityminen ja niiden tilalle tulee Kotisivu ja kirjaudu ulos painike. 

Rekisteröityminen tapahtuu syöttämällä käyttäjänimi ja salasana lomakkeeseen, jonka jälkeen luo käyttäjä painiketta painamalla pääsee kirjautumis-sivulle mistä käyttäjä pääsee kirjautumaan käyttäjälleen. Kirjautumisen jälkeen käyttäjälle aukeaa kotisivu, missä käyttäjä voi edelleen tarkastella valmiita visualisointeja kaavioista tai luoda omanlaisensa. 

![kuva2](https://user-images.githubusercontent.com/98481894/207606541-bf06facd-b58e-4812-8fbd-248670b50404.png)

Kuva 2. Lämpötilatiedot ja co2 pitoisuudet –osio, missä kaaviot 1-7 ja 10. 

Kotisivunäkymän yläpalkin alapuolella näkyy tervetulo viesti sekä kirjautuneen käyttäjän käyttäjänimi. Viestin alapuolella näkyy Kuvaajien lisäys ja poisto painikkeita, jotka on värikoodattu vihreäksi ja punaiseksi. Jokaiselle kuvaajalle on oma painike, millä voi lisätä tai poistaa sekä painike jolla voi poistaa jokaisen käyttäjän tekemän kaavion. Jokaisen kaavion alapuolella on oma kirjoitusalue, mihin käyttäjä voi kirjoittaa muistiinpanoja kaaviosta jos näin haluaa. Käyttäjä voi listata kotisivulleen kaikki kaaviot ja tallentaa näkymän, tai yhden kaavion mikäli näin haluaa. 

Kotisivulla on myös sivun alareunassa molemmin puolin painikkeet, mistä voi poistaa käyttäjän tai vaihtaa kaavioiden näkymää. Poista käyttäjä painike varmistaa käyttäjältä haluaako tämä varmasti poistaa käyttäjänsä ja jos käyttäjä vastaa kyllä niin käyttäjän tiedot poistetaan tietokannasta, käyttäjän luomat visualisoinnit poistetaan käyttäjältä sekä käyttäjän luomat muistiinpanot poistetaan käyttäjältä. 

![kuva3](https://user-images.githubusercontent.com/98481894/207606590-56d83f8a-67e5-4ffe-b9eb-9601f993dcea.png)

Kuva 3. Kotisivu, jossa käyttäjä voi luoda omia visualisointeja, poistaa ja muokata niitä. 

Kaavioiden näkymän vaihto painike vaihtaa kotisivu näkymää niin, että kaaviot muuttuvat yhden rivin näkymästä vierekkäin kahden rivin näkymään, jossa käyttäjällä on samat toiminnot, mutta näkymä on vain eri. 

![kuva4](https://user-images.githubusercontent.com/98481894/207606619-72d1e810-df7e-4a86-982d-22d2a20c4855.png)

Kuva 4. Kotisivu eri näkymällä. 

# Dokumentit
## Sovelluksen tietokantarakenne
![TietokantaRakenne](https://user-images.githubusercontent.com/97599254/207616167-e437bb5e-0767-402f-8071-e81a1dcacb54.jpg)
Kuva 5. Tietokantarakenne

[Sovellus pyörii](https://climatechangeapp-370911.ew.r.appspot.com/) Google Cloudin App Enginessä.
