import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jsPDF-dynamicForms';

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
// tslint:disable-next-line: member-ordering
    // let height = window.outerHeight;
    let iframeDocument = document.getElementsByTagName('iframe')[0].contentDocument;
    iframeDocument.body.style.backgroundColor = "blue";
    // let htmlDocument = f.contentDocument;
    console.log(iframeDocument);
    // console.log(htmlDocument);
    // var oField = this.getField('FirstName');

  }

  // function getField(cName) {
  //   var oField = this.getField
  // }
}

