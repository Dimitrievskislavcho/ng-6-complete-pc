import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/shared.module';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  createIngredient($event: Event) {
    $event.stopPropagation();
    $event.stopPropagation();

    const name = (<HTMLInputElement>(this.nameInput.nativeElement)).value;
    const amount = Number((<HTMLInputElement>(this.amountInput.nativeElement)).value);

    this.newIngredient.emit(new Ingredient(name, amount));
  }

  ngOnInit() {
  }

}
