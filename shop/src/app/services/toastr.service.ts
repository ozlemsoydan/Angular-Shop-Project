import { Injectable } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string){
    ToastrModule.success(message)
  }
}
