import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-ative-email',
  templateUrl: './ative-email.component.html',
  styleUrls: ['./ative-email.component.css'],
})
export class EmailActiveMessageComponent implements OnInit {

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  }

}
