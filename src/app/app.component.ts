import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  phonenumber: number;
  goToWhatsapp() {
    window.open(`https://wa.me/+91${this.phonenumber}`);
    console.log(this.phonenumber);
  }
}
