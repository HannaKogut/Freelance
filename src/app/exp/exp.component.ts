import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
	_ref:any;
		exp:number;
		state: boolean;

  constructor() { }

	toggle(){
		this.state = !this.state
	}
  removeObject(){
  	this._ref.destroy();
  }


  ngOnInit() {
  }

}
