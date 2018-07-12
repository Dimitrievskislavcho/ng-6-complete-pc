import { Component, OnInit, ViewChild, OnDestroy,  } from '@angular/core';
import { Ingredient } from '../../shared/shared.module';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('sef') shoppingListEditForm: NgForm;
  editMode = false;
  editIndex = -1;
  editStartedSubscription: Subscription;

  constructor(private shoppintListService: ShoppingListService) { }

  saveIngredient() {
    const { name, amount } = this.shoppingListEditForm.value;
    const savedIngredient = new Ingredient(name, amount);
    this.shoppintListService.saveIngredient(this.editIndex, savedIngredient);
    this.editMode = false;
    this.editIndex = -1;
    this.shoppingListEditForm.reset();
  }
  createIngredient() {
    const name = this.shoppingListEditForm.form.get('name').value;
    const amount = this.shoppingListEditForm.form.get('amount').value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppintListService.addIngredient(newIngredient);
    this.shoppingListEditForm.reset();
  }

  onClear() {
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppintListService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnInit() {
    this.editStartedSubscription = this.shoppintListService.startedEditing.subscribe(
      (index) => {
        this.shoppingListEditForm.form.setValue(this.shoppintListService.getIngredient(index));
        this.editMode = true;
        this.editIndex = index;
      }
    );
  }

  ngOnDestroy() {
    this.editStartedSubscription.unsubscribe();
  }

}
