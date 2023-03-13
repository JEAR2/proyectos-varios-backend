import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();
  @Input() total: number = 0;
  constructor() {}

  ngOnInit(): void {}

  handleClose() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }
}
