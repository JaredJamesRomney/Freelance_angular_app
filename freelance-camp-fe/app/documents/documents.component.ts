import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css'],
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'Its my first time',
			file_url: 'http://google.com',
			updated_at: 'Yesterday',
			image_url: 'http://www.java-studios.com/wp-content/uploads/2016/07/freelancing.jpg',

		},
		{
			title: "My Second Doc",
			description: 'Its my first time',
			file_url: 'http://google.com',
			updated_at: 'Yesterday',
			image_url: 'https://www.cloudbooksapp.com/blog/wp-content/uploads/2015/10/ddvdsrfgrtgr.jpg',

		},
		{		
			title: "My Third Doc",
			description: 'Its my first time',
			file_url: 'http://google.com',
			updated_at: 'Yesterday',
			image_url: 'https://cdn.elegantthemes.com/blog/wp-content/uploads/2015/08/Freelancer-vs-Agency-shutterstock_295721123.png',
		}
	]
}