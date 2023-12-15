import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
    //  {providedIn: 'root'} is a short cut for providing this service in the appModule providers array
    
export class UserService {
    activatedEmitter = new Subject<boolean>();
}