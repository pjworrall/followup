#Followup!

##Development team onboarding project

### Introduction

This project is a simple application for onboarding team members into the Interition Zonafide Development team. It fulfills the
following purposes:

* Helping potential team members show us how they can contribute
* Introduce the development frameworks we are using
* Familiarise team members with the development environment
* Explore the code best practices, test policies and techniques
* Try out new development frameworks, tools or techniques

### What does followup do?

There are countless contact systems out there but all are too complicated, have too many features, are dominated by
a particular view on how people work or have other impediments. After years of trying to find a solution we wrote this ourselves.
It was complete in a couple of days and just does what was wanted: the ability to know when to follow someone up.

We didn't care about the contact as much as the followup. The followup is where the action is. It needed to enable
someone to see what followups to do next and provide any context to carry over into the followup. That was it.

### Technical overview

The technology chosen was based on keeping things as simple as possible but also supporting a number of options
going forward if we were to develop it further in the future. We chose MeteorJS because it
claimed to enable us to use the same language across the whole stack. This meant we only needed command of one language
and anyone working on the code would have equal opportunity to understand and contribute. It also claimed to enable us
to deploy the application to mobile devices as native applications and had a data storage mechanism which propagated changes 
dynamically and kept things nicely coherent for the developer. MeteorJS is obviously Javascript, JS has many
frameworks to chose from all with their own passionate supporters. We didn't care and MeteorJS was the first to
snatch our attention.

## Running Followups

### Install dependencies

Install MeterJS (https://www.meteor.com/install)

You might need NodeJs as well but MeteorJs includes it. In particular for direct use of its package manager: NPM.

Install NodeJs (https://nodejs.org/en/)

### Getting the source code

Clone the Followup git repository here

### Downloading dependencies

Make sure you have all the dependencies:
```
Meteor npm install
```

### Install a development environment

You can use anything you want. We use JetBrains WebStorm (https://www.jetbrains.com/webstorm/) and sometimes Atom (https://atom.io/) .

## Contributing

Contribute absolutely anything and submit a pull request. If it works and does'nt compromise anything it will get accepted.

## License

MIT License
