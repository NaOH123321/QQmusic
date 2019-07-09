import { Component, OnInit } from '@angular/core';
import { TopSongItem } from '../../domain';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
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

  // pullDownStyle = '';

  // isPullUpLoad = false;
  // pullupText = 'asdsasds';

  // beforePullDown = true;
  // isPullDown = false;
  // pullDownText = 'ggggggggggg';

  constructor() {}

  ngOnInit() {
    this.topSongList = this.topSongListInit;
  }

  scroll(pos) {
    // if (this.beforePullDown) {
    //   this.pullDownStyle = `${Math.min(pos.y + -50, 10)}px`;
    // } else {
    //   this.pullDownStyle = `-50px`;
    // }
  }

  pullingUp(): void {
    // this.isPullUpLoad = true;
    setTimeout(() => {
      // this.isPullUpLoad = false;

      this.topSongList.push({
        id: 1,
        picUrl: '',
        name: '撒的发' + this.i,
        singer: '撒的发' + this.i,
        durationTime: 86846
      });
      this.i++;
      console.log('sssssssssssss');
    }, 3000);
  }

  pullingDown(): void {
    // this.beforePullDown = false;
    // this.isPullDown = true;
    setTimeout(() => {
      // this.beforePullDown = true;
      // this.isPullDown = false;
      this.topSongList = [];
      this.topSongList = this.topSongListInit;
      console.log('rrrrrrrrrrrrrrr');
    }, 3000);
  }
}
