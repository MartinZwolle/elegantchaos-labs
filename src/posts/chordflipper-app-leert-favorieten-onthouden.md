---
title: ChordFlipper App leert favorieten onthouden
date: 2026-07-24
layout: post.njk
tags: posts
excerpt: Wat begon als een idee om rechtstreeks vanuit Obsidian te bloggen eindigde in een nieuwe website, een CI/CD-pipeline en een avond vol technische chaos.
image: /images/posts/chordflipper-doorontwikkeling.png
---

# ChordFlipper App leert favorieten onthouden

Toen ik ChordFlipper online zette dacht ik eigenlijk dat hij wel zo'n beetje af was.

Hij deed precies wat ik wilde: willekeurige akkoorden laten zien op het tempo van een metronoom. Ideaal om akkoordwisselingen te oefenen zonder dat ik steeds zelf hoef na te denken over het volgende akkoord.

Maar zodra je hem een paar dagen gebruikt, kom je erachter dat je steeds dezelfde setjes opnieuw zit in te voeren.

- G – D – Em – C
- Am – F – C – G
- D – A – Bm – G

Blijkbaar oefen ik toch vaker dezelfde progressies dan ik dacht.

Dus tijd voor versie 2.1.

## Favoriete akkoordensets

Je kunt nu een akkoordenschema opslaan als favoriet.

Niet heel spannend misschien, maar wel ontzettend handig. Eén tik en je favoriete schema staat weer klaar. Je kunt zoveel favorieten bewaren als je wilt en als je ergens op uitgekeken bent verwijder je hem net zo makkelijk weer.

Het is zo'n functie waarvan je je afvraagt waarom hij er niet vanaf het begin in zat.

## Geen account, geen database

Het leuke aan zo'n kleine webapp is dat je soms verrassend ver komt zonder server.

Alle favorieten worden namelijk lokaal opgeslagen in de browser met `localStorage`.

Dat betekent:

- geen account nodig;
- geen database;
- geen backend;
- geen privacyzorgen;
- en alles werkt ook gewoon offline.

Iedere browser bewaart zijn eigen lijstje favorieten. Dat is voor deze applicatie eigenlijk precies goed genoeg.

## Technisch

De implementatie bleek uiteindelijk verrassend overzichtelijk.

Elke favoriete set wordt opgeslagen als een klein JSON-object met een unieke ID, een naam en de lijst met akkoorden. Bij het opstarten leest ChordFlipper de opgeslagen lijst uit `localStorage` en bouwt daarmee automatisch het favorietenmenu op.

Opslaan betekent simpelweg:

- huidige akkoordenset omzetten naar JSON;
- toevoegen aan de bestaande lijst;
- opnieuw wegschrijven naar `localStorage`.

Verwijderen werkt precies andersom: de juiste ID uit de lijst filteren en de nieuwe lijst weer opslaan.

Geen frameworks. Geen ingewikkelde state management libraries. Gewoon JavaScript.

Eigenlijk wel verfrissend.

## Kleine apps zijn leuk

Misschien is dat wel het leukste aan dit project.

Normaal werk ik vooral aan systemen met tientallen microservices, Kubernetes-clusters, CI/CD-pipelines en heel veel overleg.

ChordFlipper bestaat uit een paar HTML-, CSS- en JavaScript-bestanden.

Binnen een avond kun je een idee bedenken, bouwen en daadwerkelijk gebruiken tijdens het gitaar oefenen.

Dat geeft een soort directe voldoening die je in grotere softwareprojecten soms een beetje kwijt bent.

## Op naar versie 2.2

Natuurlijk bleef het daar niet bij.

Voor versie 2.2 staan alweer een paar ideeën op mijn lijstje:

- een landscape-modus voor tablets en telefoons;
- een nog betere weergave van grote akkoorden;
- wat kleine verbeteringen aan de interface;
- en waarschijnlijk nog wat bugs die ik pas ontdek zodra ik hem zelf vaker gebruik.

Zoals altijd groeit software gewoon mee met het gebruik.

En eerlijk gezegd vind ik dat misschien nog wel het leukste deel van het hele project.

Misschien moet ik hier een Android-app van maken.
    
