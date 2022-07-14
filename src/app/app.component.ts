import { Component, VERSION } from '@angular/core';
import { WebMidi } from 'webmidi';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //outputs!: IterableIterator<WebMidi.MIDIOutput>;
  chord: number[] = [48, 52, 55]; // C major

  ngOnInit() {
    WebMidi.enable().then(() => {
      if (WebMidi.outputs.length < 1) {
      } else {
        WebMidi.outputs[0].channels[1].playNote(this.chord);
      }
    });
    //.catch(err => alert(err));
  }

  stopChord(): void {
    WebMidi.outputs[0].channels[1].stopNote(this.chord);
  }
}
