import { IMp4MediaPlayer } from "./AdvancedMediaPlayer";

export class Mp4Player implements IMp4MediaPlayer {
  playMp4(fileName: string): void {
    console.log(`Playing MP4: ${fileName}`);
  }
}
