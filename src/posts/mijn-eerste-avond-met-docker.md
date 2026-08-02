---
title: Mijn eerste avond met Docker
date: 2026-08-02
layout: post.njk
tags: posts
excerpt: Wat begon als een idee om rechtstreeks vanuit Obsidian te bloggen eindigde in een nieuwe website, een CI/CD-pipeline en een avond vol technische chaos.
image: /images/posts/eerste-avond-docker.png
---

# Mijn eerste avond met Docker

Vanavond heb ik een persoonlijke CRM draaiend gekregen. Gewoon op mijn eigen pc. In Docker!!!

Dat klinkt misschien niet zo bijzonder,  maar een paar uur geleden wist ik eigenlijk nog steeds niet wat een container nu écht was.

Natuurlijk kende ik Docker. Ik wist dat Kubernetes ermee werkte en dat ongeveer alles tegenwoordig "gecontaineriseerd" is. Maar eerlijk gezegd was mijn mentale model niet veel verder gekomen dan: _een soort zeecontainer waar software in zit._

Dat blijkt verrassend dicht bij de waarheid te liggen.

Zoals dat hoort bij een eerste avond begon het niet heel soepel. Docker wilde niet starten. Bleek virtualisatie in mijn BIOS uit te staan. Dat was blijkbaar al jaren zo. Daarna volgde de klassieke "Hello World"-container, die precies lang genoeg leefde om "Hello from Docker!" te zeggen en weer te verdwijnen.

Leuk.

Pas toen ik een Nginx-webserver startte, viel het kwartje. Mijn browser maakte verbinding met `localhost:8080` en ergens daaronder draaide gewoon een Linux-webserver. Zonder installatie. Zonder configuratie. Alleen omdat ik had gezegd dat ik een Nginx-container wilde.

En dan komt Docker Compose.

Ik wilde Monica CRM (een soort van CRM voor je privé contacten) installeren. Niet omdat ik zo nodig een CRM nodig heb, maar omdat het een echte applicatie is. Met een webserver. Een database. Persistent opgeslagen gegevens. Meerdere containers die met elkaar praten.

Normaal gesproken zou ik PHP installeren. Daarna MariaDB. Dan Apache of Nginx. Configureren. Gebruikers aanmaken. Rechten goed zetten. Bidden dat alles dezelfde versies gebruikt.

Nu schreef ik een bestandje van een paar regels.

Daarin stond eigenlijk alleen:

> Ik wil Monica.

> Ik wil een database.

> Ze moeten met elkaar kunnen praten.

> En de gegevens moeten bewaard blijven.

Docker deed de rest.

Nou ja... bijna dan.

Er volgden nog wat leuke uitstapjes langs Linux-bestandsrechten, database-migraties en een ontbrekende kolom in de database. Het soort problemen waar je stiekem juist van leert omdat je ineens begrijpt hoe zo'n applicatie onder de motorkap in elkaar zit.

En ergens halverwege de avond zag ik:

> Dit is eigenlijk Infrastructure as Code.

Dat voelde als het echte inzicht van de avond.

Niet software installeren.

Maar een systeem beschrijven.

Dat ken ik al van Terraform. Alleen beschrijf ik nu geen servers, maar applicaties.

Aan het einde van de avond heb ik mijn vrouw als eerste contact toegevoegd.

Dat leek me wel passend.

Morgen ga ik verder.

Er liggen namelijk nog vier oude Raspberry Pi's op zolder die ineens verdacht veel op een klein datacenter beginnen te lijken.
    
