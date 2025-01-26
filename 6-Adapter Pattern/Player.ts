import { IMediaPlayer } from "./IMediaPlayer";
import { MediaPlayer } from "./MediaPlayer";

export class Player implements IMediaPlayer {
  play(audioType: string, fileName: string): void {
    if (audioType === "mp3") {
      console.log(`Playing MP3`);
    } else if (audioType === "vlc" || audioType === "mp4") {
      const mediaAdapter = new MediaPlayer(audioType);
      mediaAdapter.play(audioType, fileName);
    } else {
      console.log(`Invalid media type: ${audioType}`);
    }
  }
}
