import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  snapshotParam = "initial value";
  subscribedParam = "initial value";
  
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("color");

    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("color");
    });

  }


  goto(color: string): void {
    this.router.navigate(["colors", color]);
  }
}
