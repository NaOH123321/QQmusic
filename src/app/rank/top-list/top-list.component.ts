import { Component, OnInit } from '@angular/core';
import { TopSongItem } from '../../domain';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
  // pullDownStyle = '';

  // isPullUpLoad = false;
  // pullupText = 'asdsasds';

  // beforePullDown = true;
  // isPullDown = false;
  // pullDownText = 'ggggggggggg';

  constructor() {}
  topSongListInit: TopSongItem[] = [
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 2,
      picUrl: '',
      name: 'ffff',
      singer: 'gdhgfh',
      durationTime: 4001,
      rank: 1
    },
    {
      id: 3,
      picUrl: '',
      name: 'sdsf',
      singer: '撒的发',
      durationTime: 2901,
      rank: 1
    },
    {
      id: 4,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 3901,
      rank: 1
    },
    {
      id: 5,
      picUrl: '',
      name: 'hjgh6',
      singer: '78hjk',
      durationTime: 4503,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    },
    {
      id: 1,
      picUrl: '',
      name: '撒的发ssss',
      singer: '撒的发',
      durationTime: 2001,
      rank: 1
    }
  ];

  topSongList: TopSongItem[] = [];

  i = 0;

  update = false;
  pullDownRefresh = true;
  pullUpLoad = true;

  ngOnInit() {
    this.topSongList = this.topSongListInit;
  }

  pullingUp(): void {
    this.update = false;
    setTimeout(() => {
      this.topSongList.push({
        id: 1,
        picUrl: '',
        name: '撒的发' + this.i,
        singer: '撒的发' + this.i,
        durationTime: 86846
      });
      this.i++;
      this.update = true;

      if (this.i === 5) {
        this.pullUpLoad = false;
      }
      console.log('sssssssssssss');
    }, 1000);
  }

  pullingDown(): void {
    this.update = false;
    setTimeout(() => {
      this.topSongList = [];
      this.topSongList = this.topSongListInit;
      this.update = true;
      console.log('rrrrrrrrrrrrrrr');
    }, 3000);
  }
}
