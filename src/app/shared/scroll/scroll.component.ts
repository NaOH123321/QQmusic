import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit, AfterContentInit {
  scroll: BScroll;

  @ViewChild('scrollContent', { static: true })
  scrollContent: ElementRef;

  pullDownStyle = '';

  isPullUpLoad = false;
  pullupText = 'asdsasds';

  beforePullDown = true;
  isPullDown = false;
  pullDownText = 'ggggggggggg';

  @Input()
  pullDownRefresh = false;
  @Input()
  pullUpLoad = false;
  @Output()
  scrollFun = new EventEmitter();
  @Output()
  pullingDown = new EventEmitter();
  @Output()
  pullingUp = new EventEmitter();

  // @Output()
  // pullingUp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.initScroll();
  }

  ngDoCheck(): void {
    this.forceUpdate();
    if (this.pullDownStyle === '-50px') {
      this.beforePullDown = true;
    }
  }

  initScroll(): void {
    const scrollContent = this.scrollContent.nativeElement;
    const options = {
      probeType: 1,
      scrollY: true,
      bounce: true,
      pullDownRefresh: this.pullDownRefresh && { threshold: 50, stop: 50 },
      pullUpLoad: this.pullUpLoad
    };
    this.scroll = new BScroll(scrollContent, options);

    if (this.pullDownRefresh) {
      this.initPullDownRefresh();
    }

    if (this.pullUpLoad) {
      this.initPullUpLoad();
    }
  }

  initPullDownRefresh(): void {
    this.scroll.on('pullingDown', () => {
      this.beforePullDown = false;
      this.isPullDown = true;
      this.pullingDown.emit();
      // this.scroll.finishPullDown();
    });

    this.scroll.on('scroll', pos => {
      const position = (pos.y - 50 >= 20 && 20) || pos.y - 50;
      // let position = pos.y-50 >= 20 && 20 || pos.y-50;
      this.pullDownStyle = `${position}px`;

      // if (this.beforePullDown) {
      //   // this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop);
      //   this.pullDownStyle = `top:${Math.min(pos.y + -50, 10)}px`;
      // }
    });
  }

  initPullUpLoad(): void {
    this.scroll.on('pullingUp', () => {
      this.isPullUpLoad = true;
      this.pullingUp.emit();
      // this.scroll.finishPullUp();
    });
  }

  forceUpdate() {
    if (this.pullUpLoad && this.isPullUpLoad) {
      this.isPullUpLoad = false;
      this.scroll.finishPullUp();
      this.scroll.refresh();
    } else if (this.pullDownRefresh && this.isPullDown) {
      this.isPullDown = false;
      setTimeout(() => {
        // 让刷新成功停留一段时间
        this.scroll.finishPullDown();
        this.scroll.refresh();
      }, 500);
    }
  }
}
