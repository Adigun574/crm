import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public api = `http://api.tunnexlabcrm.com/api/`

  constructor() { }
}
