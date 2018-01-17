import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          //only keep after single navigation keep after single navigation change
          this.keepAfterNavigationChange = false;
        } else {
          //clear alert
          this.subject.next();
        }
      }
    });
   }

   success(message: string, keepAfterNavigationChange = false){
     this.keepAfterNavigationChange =keepAfterNavigationChange;
     this.subject.next({type: 'success', text: message});
   }

   error(message: string, keepAfterNavigationChange = false){
     this.keepAfterNavigationChange = keepAfterNavigationChange;
     this.subject
   }

}
