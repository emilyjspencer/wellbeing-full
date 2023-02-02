import { Injectable } from '@angular/core';
import { IModal } from '../interfaces/IModal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private displayed = false;
  modalsList: IModal[] = [];

  modalOpen(id: string): boolean {
    return !!this.modalsList.find(i => i.id === id)?.displayed
  }

  toggleModal(id: string) {
    const modal = this.modalsList.find(i => i.id === id)

    if (modal) {
      modal.displayed = !modal.displayed
    }

    console.log('am I working')
  }

  registerModal(id: string) {
    this.modalsList.push({
      id,
      displayed: false
    })
  }

  deregisterModal(id: string) {
    this.modalsList = this.modalsList.filter(i => i.id === id)
  }
}
