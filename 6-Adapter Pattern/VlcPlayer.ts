import { IVlcMediaPlayer } from "./AdvancedMediaPlayer";

export class VlcPlayer implements IVlcMediaPlayer{
    playVlc(fileName: string): void {
        console.log(`Playing VLC file: ${fileName}`);
    }
}