---
title: App voor gitaar oefeningen verbouwd
date: 2026-06-28
layout: post.njk
tags: posts
excerpt: Mijn webapp Chordflipperm die ik gebruik om akkoordwisselingen mee te oefenen heb ik flink verbouwd
image: /images/posts/Chordflip-oud-en-nieuw.png
---

# App voor gitaar oefeningen verbouwd

Ruim een jaar geleden begon ik, na zo'n vijfentwintig jaar, weer met gitaarles. Verrassend veel bleek nog ergens in mijn vingers te zitten. Alleen de routine was verdwenen. Vooral het wisselen tussen akkoorden ging een stuk minder soepel dan ik me herinnerde.

Dus bouwde ik een klein hulpmiddel.

**ChordFlipper** (https://app.elegantchaos.nl) laat een zelfgekozen rijtje akkoorden in willekeurige volgorde langskomen, steeds na een vast aantal metronoomtikken. Meer doet het eigenlijk niet. Geen liedjes, geen tabs, geen lessen. Gewoon een manier om eindeloos akkoordwisselingen te oefenen zonder steeds zelf na te hoeven denken over het volgende akkoord.

Zoals dat gaat met hobbyprojecten bleef het daar natuurlijk niet bij.

Er kwam een metronoom bij. Daarna een countdown. Een pauzeknop. En voor ik het wist zat alles in één JavaScript-bestand dat ooit klein begon, maar inmiddels groot genoeg was om bij iedere wijziging wel ergens iets onverwachts stuk te maken.

Dus heb ik afgelopen week nauwelijks nieuwe functionaliteit gebouwd.

In plaats daarvan ben ik de app opnieuw gaan opbouwen. De JavaScript opgesplitst in meerdere bestanden, de logica beter gescheiden en de hele structuur een stuk overzichtelijker gemaakt. Minder spectaculair dan nieuwe functies toevoegen, maar uiteindelijk waarschijnlijk een stuk waardevoller.

Onderweg leerde ik meteen weer een paar dingen. Bijvoorbeeld dat Cloudflare Pages en browsercaches soms verrassend hardnekkig kunnen zijn, en dat een simpele wijziging in een CSS-bestand je zomaar een uur kan kosten.

De app is nog lang niet af. Op mijn wensenlijst staan in ieder geval nog:

- Een **Focus Mode**, waarbij tijdens het oefenen alleen het akkoord zichtbaar is.
- Een beat-indicator, zodat je niet meer hoeft mee te tellen.
- Favoriete akkoordensets opslaan.
- Een landscape-modus voor gebruik op een muziekstandaard.
- Een donkere en lichte modus.
- Subtiele animaties bij het wisselen van akkoorden.
- En kijken of ik er met Expo een echte android app van kan maken ipv een PWA

Wordt ongetwijfeld vervolgd.

   
