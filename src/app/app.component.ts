import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //outputs!: IterableIterator<WebMidi.MIDIOutput>;

  ngOnInit() {
    window.navigator.requestMIDIAccess().then((access) => {
      // this.outputs = access.outputs.values();
      // access.onstatechange = (e) => {
      //   this.outputs = access.outputs.values();
      // };
    });
  }
}
