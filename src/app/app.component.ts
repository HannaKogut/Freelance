
import { Component, 
         OnInit, 
         ViewChild, 
         ComponentFactoryResolver,
         ViewContainerRef } from '@angular/core';
import { ExpComponent } from './exp/exp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
@ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;

constructor(private _crf:ComponentFactoryResolver){ }
   ngOnInit(){
     
     this.addComponent();
   }
   addComponent(){

   	var comp = this._crf.resolveComponentFactory(ExpComponent);
   	var expComponent = this.container.createComponent(comp);
   	expComponent.instance._ref = expComponent;
   }
}
