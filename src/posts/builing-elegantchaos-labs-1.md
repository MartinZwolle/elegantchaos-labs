---

title: Building Elegant Chaos Labs #1
date: 2026-06-21
layout: post.njk
tags: posts
excerpt: Wat begon als een idee om rechtstreeks vanuit Obsidian te bloggen eindigde in een nieuwe website, een CI/CD-pipeline en een avond vol technische chaos.
image: /images/posts/post-placeholder.png
-----------------------------------------

# Building Elegant Chaos Labs #1

Dit is de eerste post op een nieuwe website.

Een website die ik eigenlijk per ongeluk heb gemaakt.

Het oorspronkelijke idee was namelijk veel simpeler.

Ik wilde kijken of ik mijn blogposts rechtstreeks vanuit Obsidian kon publiceren.

Niet via een CMS.

Niet via een admin-interface.

Gewoon een markdown-bestand schrijven, op een knop drukken en klaar.

Dat bleek iets ingewikkelder dan gedacht.

Een paar uur later had ik ineens een GitHub repository, een 11ty-installatie, een Cloudflare Pages deployment, een eigen logo, een favicon en een compleet nieuwe website.

Dus welkom bij Elegant Chaos Labs.

Een plek waar ik verslag kan doen van technische experimenten die vaak beginnen met een simpele vraag en eindigen op een totaal andere plek.

Of het nu gaat om infrastructuur, AI, gitaarprojecten op een Raspberry Pi, een zelfgebouwde website of een managementidee dat ik wil uitproberen: dit is het lab.

En dit is experiment nummer één.

## De opzet

Het idee was simpel:

```text
Obsidian
↓
Markdown
↓
GitHub
↓
11ty
↓
Cloudflare Pages
↓
Website
```

Geen database.

Geen CMS.

Geen plugins die na drie jaar niet meer onderhouden worden.

Gewoon bestanden.

Ik schrijf iets.

Ik commit.

Ik push.

En ergens anders op internet verschijnt een nieuwe pagina.

## De eerste verrassingen

De installatie van 11ty bleek verrassend eenvoudig.

Ik had verwacht dat ik een avond kwijt zou zijn aan Node-versies, npm-conflicten en obscure foutmeldingen.

Dat viel mee.

Binnen een uur draaide er lokaal een website.

Daarna begon het echte werk.

Layouts.

Navigatie.

Een homepage.

Blogposts.

Een donkere stijl.

Een logo.

Een favicon.

Automatische deployments.

Allemaal van die dingen die je pas mist zodra ze er niet zijn.

## De onvermijdelijke cache-oorlog

Natuurlijk ging niet alles goed.

Lokaal werkte de site perfect.

Op Cloudflare zag ik oude CSS.

Cloudflare gebruikte de juiste commit.

De build was succesvol.

De bestanden stonden op de juiste plek.

Alles leek correct.

Tot bleek dat mijn browser vrolijk een oude versie van het stylesheet uit zijn cache trok.

Dat soort problemen zijn bijzonder leerzaam.

Vooral omdat je eerst aan alles twijfelt behalve aan de browser.

## Wat er nu staat

Aan het eind van de avond stond er:

* Een 11ty-site
* Een donkere layout
* Een automatische bloglijst
* Datums en excerpts
* Afbeeldingen per post
* Een placeholder-afbeelding
* Een About-pagina
* Een eigen logo
* Een favicon
* Een automatische deployment via GitHub en Cloudflare Pages

Niet slecht voor een project dat begon met:

> "Zou ik dit kunnen maken?"

## Waarom eigenlijk?

Dat is misschien nog wel de interessantste vraag.

Want ik had dit ook gewoon niet kunnen doen.

Mijn bestaande blog werkt prima.

Maar sommige projecten hebben geen zakelijke rechtvaardiging nodig.

Sommige projecten bestaan omdat je nieuwsgierig bent.

Omdat je iets wilt begrijpen.

Omdat het leuk is om een avond lang te knutselen en aan het eind iets werkends te hebben.

Of zoals een groot deel van mijn hobbyprojecten:

Niet omdat het nodig is.

Omdat het kan.

## Bijna klaar

Het grappige is dat het oorspronkelijke doel nog niet helemaal bereikt is.

Ik wilde rechtstreeks vanuit Obsidian publiceren.

Zover ben ik nog niet.

Op dit moment ziet het proces er ongeveer zo uit:

```text
Obsidian
↓
Git
↓
GitHub
↓
11ty
↓
Cloudflare Pages
↓
Website
```

Dat is al verrassend dichtbij.

Alles staat inmiddels ongeveer klaar.

De website bestaat.

De automatische deployments werken.

Nieuwe posts verschijnen vanzelf op de homepage.

Ik hoef alleen nog de laatste stap te zetten.

Dus voorlopig schrijf ik mijn posts nog niet direct vanuit Obsidian.

Maar ik ben er wel bijna.

En eerlijk gezegd is het bouwen van de oplossing minstens zo leuk gebleken als het oorspronkelijke probleem.
