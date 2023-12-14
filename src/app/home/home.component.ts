import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  count = 0;
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = new Observable(observer => {
      setInterval(() => {
        observer.next(this.count);
        this.count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
