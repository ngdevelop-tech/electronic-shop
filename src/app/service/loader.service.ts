import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  visible: boolean;

  constructor() { }

  showLoader() {
    this.visible = true;
  }
  hideLoader() {
    this.visible = false;
  }
}
