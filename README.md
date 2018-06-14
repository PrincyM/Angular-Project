# Angular-Project
Aim: This repo is to track our progress for Humber Angular Project that includes building a single page application (SPA) with RESTful APIs

Description: Team Portfolio is a single page application that includes profile information and projects done by the team of developers who built this application. It is built using Angular 2 with Bootstrap to make it responsive. 

## Princy: 

I worked on the SPA introduction and team-member component, model and service that gives a simple introduction about the SPA and shows the team members profile information. 

### TeamMember model: 

I have used the teamMember model to hold properties that would be relevant for a profile like id, name, role, bio, birthday, profile image & individual portfolio link. 

### Team Member service: 

Imported sufficient dependencies (model, rxjs) in the team-member service and used a method to return team-member array. Method is written using 'Observable' and 'of' to return contents of service. 

### Team Member component: 

Imported sufficient dependencies (model, service, etc.) in the team-member component files. The HTML for the component displays service contents to the user through a styled layout. 

## Elizabeth

I worked on the project component, model and service. The component shows the projects of both the team members. 

### Project model

The model contains the following fields - id, name, description, start date, end date, completed and the image Url. 

### Project Service

The service contains the array of projects and a function to return the array of projects, which is Observable.

### Project Component

The component calls the method in the service class using the service instance and the subscribed array will be used to display using the appropriate HTML tags.
