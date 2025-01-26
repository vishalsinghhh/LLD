import { IMediaPlayer } from "./IMediaPlayer";
import { IVlcMediaPlayer, IMp4MediaPlayer } from "./AdvancedMediaPlayer";
import { VlcPlayer } from "./VlcPlayer";
import { Mp4Player } from "./Mp4Player";

export class MediaPlayer implements IMediaPlayer {
  private vlcMediaPlayer: IVlcMediaPlayer | null = null;
  private mp4MediaPlayer: IMp4MediaPlayer | null = null;

  constructor(audioType: string) {
    switch (audioType) {
      case "vlc":
        this.vlcMediaPlayer = new VlcPlayer();
        break;
      case "mp4":
        this.mp4MediaPlayer = new Mp4Player();
        break;
      default:
        throw new Error("not correct audio type!");
    }
  }

  play(audioType: string, fileName: string): void {
    switch (audioType) {
      case "vlc":
        if (this.vlcMediaPlayer) {
          this.vlcMediaPlayer.playVlc(fileName);
        } else {
          console.error("VLC player is not initialized!");
        }
        break;
      case "mp4":
        if (this.mp4MediaPlayer) {
          this.mp4MediaPlayer.playMp4(fileName);
        } else {
          console.error("MP4 player is not initialized!");
        }
        break;
      default:
        console.error("Invalid audio type!");
    }
  }
}
