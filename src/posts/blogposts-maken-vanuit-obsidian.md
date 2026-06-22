---
title: Blogposts maken vanuit Obsidian
date: 2026-06-22
layout: post.njk
tags: posts
excerpt: Welke stappen maak ik nu om een bericht van Obsidian, op deze blog te posten. Zonder CMS of wat dan ook.
image: /images/posts/post-placeholder.png
---

# Blogposts maken vanuit Obsidian

Een week of twee terug bedacht ik me dat ik graag direct vanuit Obsidian mijn stukje zou willen plaatsen. Daar schrijf ik ze vaak ook. En dan moet ik ze weer in een CMS zien te krijgen. 

Tot voor kort was een een trouw Wordpress gebruiker. Dat is zware overkill voor iemand die alleen af en toe een tekstje wil schrijven. En je hebt bijna een dagtaak aan updates en lekken en leuke plugins die zomaar niet meer doorontwikkeld worden.

Nu dus een poging gedaan om dat zonder CMS te doen. Met een automatische pipeline, die dan alles voor me regelt. 

Dit is waar ik nu ben

## Obsidian
In Obsidian maak ik een markdown berichtje. Waarin alle informatie netjes meekomt zoals, tags, exerpt, datum en welke njk template gebruikt moet worden. Met de Community plugin **Blog Bridge**, kan ik deze naar GitHub committen.

## Github 
In Github wordt dit markdown bericht klaargezet in de jusite map.

## Cloudflare Pages
Vanuit Cloudflare Pages wordt er geluisterd naar de Github Repo, en wordt bij de plaatsing van een nieuw Markdown bericht, een build gedaan met 11ty. Die ervoor zorgt dat de .md omgezet wordt naar een HTML bestand.   

## Succes
Dit is wel waar ik naar op zoek was. Ik kan gewoon een stukje schrijven. Op de plek die ik wil. En even later staat het gewoon online. Supercool.

## Verdere wensen
- Eigenlijk wil ik nog iets met Github Actions, een (aantal) testen aftrappen. Kijken of de links werken, of de spelling okay is, dat soort dingen. 
- Dan nog een dashboardje in Grafana ofzo.
- En natuurlijk qua content nog wat zaken. Een RSS-feed bijvoorveeld
    
## Gebruik van AI
Dit is natuurlijk allemaal makkelijker geworden met de komst van AI. Zo af en toe heb ik wel een vraag gesteld aan ChatGPT. En er ook gebruik van gemaakt voor het maken van afbeeldingen.  Het grootste deel van het werk, heb ik zelf gedaan.