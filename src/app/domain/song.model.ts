export interface Song {
  id: string;
  rank: number;
  albumId: string;
  albumMid: string;
  albumPic: string;
  albumName: string;
  songId: string;
  songMid: string;
  songName: string;
  singers: Singer[];
  durationTime: number;

  playInfo: PlayInfo;
}

export interface PlayInfo {
  expiration: number;
  filename: string;
  vkey: string;
  url: string;
}

export interface Singer {
  id: string;
  mid: string;
  name: string;
  pic: string;
}
