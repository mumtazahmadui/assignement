import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  dataTitle = 'RxLogix';
  editMode: boolean = false;
  editIndex: number;
  gridData = [
    { id: 1, name: 'Contact 001', email: 'c001@email.com' },
    { id: 2, name: 'Contact 002', email: 'c002@email.com' },
    { id: 3, name: 'Contact 003', email: 'c003@email.com' },
    { id: 4, name: 'Contact 004', email: 'c004@email.com' }
  ];

  @ViewChild('id', { static: false }) id: ElementRef;
  @ViewChild('name', { static: false }) name: ElementRef;
  @ViewChild('email', { static: false }) email: ElementRef;

  constructor() { }

  onAddContact(id, name, email) {
    if (this.editMode) {
      this.gridData[this.editIndex] = {
        id: +id.value,
        name: name.value,
        email: email.value
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.email.nativeElement.value = '';

    } else {
      this.gridData.push({
        id: +id.value,
        name: name.value,
        email: email.value
      });
    }

  }

  onEditContact(ind) {
    this.editMode = true;
    this.editIndex = ind;
    this.id.nativeElement.value = this.gridData[ind].id;
    this.name.nativeElement.value = this.gridData[ind].name;
    this.email.nativeElement.value = this.gridData[ind].email;
  }
  onDeleteContact(ind) {
    if(this.gridData.length !== 1){
      this.gridData.splice(ind, 1)
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.email.nativeElement.value = '';
    }
    console.log('can not delete');
    

  }
}
