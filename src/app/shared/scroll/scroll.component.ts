import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  OnDestroy
} from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent
  implements OnInit, AfterContentInit, DoCheck, OnDestroy {
  scroll: BScroll;

  @ViewChild('scrollContent', { static: true })
  scrollContent: ElementRef;

  pullDownStyle = '';

  isPullUpLoad = false;

  beforePullDown = true;
  isPullDown = false;

  pullUpDirty = true;

  @Input()
  update = false;
  @Input()
  pullDownRefresh = false;
  @Input()
  pullUpLoad = false;
  @Output()
  pullingDown = new EventEmitter();
  @Output()
  pullingUp = new EventEmitter();

  constructor() {}

  pullupTextDisplay() {
    const moreText = '上拉加载更多';
    const noMoreText = '没有更多数据了';

    if (this.pullUpDirty) {
      return moreText;
    }
    return noMoreText;
  }
  pullDownTextDisplay(): string {
    if (this.pullDownRefresh) {
      return '下拉刷新';
    }
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.initScroll();
  }

  ngDoCheck(): void {
    if (this.update) {
      this.forceUpdate(true);
      if (this.pullDownStyle === '-50px') {
        this.beforePullDown = true;
      }
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
    });

    this.scroll.on('scroll', pos => {
      const position = Math.min(pos.y - 50, 20);
      this.pullDownStyle = `${position}px`;
    });
  }

  initPullUpLoad(): void {
    this.scroll.on('pullingUp', () => {
      this.isPullUpLoad = true;
      this.pullingUp.emit();
    });
  }

  forceUpdate(dirty: boolean) {
    if (this.pullUpLoad && this.isPullUpLoad) {
      this.pullUpDirty = dirty;
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

  ngOnDestroy(): void {}
}
