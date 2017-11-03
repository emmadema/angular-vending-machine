import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
	items = [];
	//this is private since we dont want this list to be accessible by other things
	keycode: string;

	
  	constructor(private itemService: ItemService) { }

  	ngOnInit() {
  		//on init you are getting all the items then this items = the itmes array
  		this.itemService.onItemsRetrieved((items) => this.items = items); 
  	
  	}

  	getSelectedItem(){
  		this.itemService.onItemsRetrieved((keycode) => this.items = keycode.json());
  	}



}
