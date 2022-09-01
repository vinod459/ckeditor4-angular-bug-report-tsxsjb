import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public editorData = `<p>Getting used to an entirely different culture can be challenging.
    While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person.
    You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
    <p style="text-align:center"><a href="https://www.google.com/search?q=cloud&rlz=1C1GCEA_enSG805SG806&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjFs--foe75AhXdFbcAHabtAgQQ_AUoAXoECAMQAw&biw=1280&bih=913&dpr=1#imgrc=XiQIPAZblWHEIM"><img src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" /></a></p>
    `;
}

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, ...args: any[]): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
