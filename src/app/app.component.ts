import { Component, VERSION } from '@angular/core';
import { WebMidi } from 'webmidi';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //outputs!: IterableIterator<WebMidi.MIDIOutput>;

  ngOnInit() {
    WebMidi.enable()
    .then(() => {
      
    })
    .catch(err => alert(err));
  }
}
