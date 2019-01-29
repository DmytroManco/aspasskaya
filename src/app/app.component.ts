import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aspasskaya';
  items;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.items = this.db.collection('products').valueChanges();

    this.items.subscribe(console.log);
  }
}
