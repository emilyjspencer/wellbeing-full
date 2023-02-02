import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modals-list',
  templateUrl: './modals-list.component.html',
  styleUrls: ['./modals-list.component.css']
})
export class ModalsListComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.registerModal('login')
  }

}
