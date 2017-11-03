import { Component, OnInit } from '@angular/core';
//can use component and on init functionality

import { BalanceService } from '../balance/balance.service';
//need to import from the balance service ts


//defing what the component is
//wont really edit this
@Component({
	//when you want to include in your html
  selector: 'app-insert-coin',
  //binding these to this component
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css']
})
export class InsertCoinComponent implements OnInit {
	coinBalance = 0;

	//gives basic functionality
	//private this var is only avalible to this classes componement
	//public use of blanace service by type of balance service
	constructor(public balanceService: BalanceService) { }

  	//this is what you do when you start running
  	ngOnInit() {
  		this.balanceService.onBalanceUpdated((balance) => {
  			this.coinBalance = balance;
  		})
  	}

  	//balance is total amount and amount is the amount added
  	//oninit it sets up a listener for the additon of balance
  	addBalance(amount) {
  		this.balanceService.addBalance(amount);
  	}
}
