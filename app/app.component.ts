import { Component } from '@angular/core';

const todos = [
	{
		title: 'Learn JavaScript',
		completed: true
	},
	{
		title:'Learn Angular 2',
		completed: false
	},

	{title: 'Make an application',
	completed: false
}
	];

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
		title = 'Angular 2Do';
		todos = todos;
}