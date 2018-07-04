import { Directive, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean;

  @HostListener('click') onToggle() {
    this.isOpen = !this.isOpen;
  }
}
