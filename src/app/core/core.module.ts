import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
// import { TokenInterceptor } from '../shared/token-interceptor';
// import { LoggingInterceptor } from '../shared/logging-interceptor';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from '../store';
import { AppEffectsModule } from '../store/effects';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import 'hammerjs';

/**
 * 配置 angular i18n
 */
import {
  registerLocaleData,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeZh);

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    AppEffectsModule
  ],
  exports: [AppRoutingModule],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: 'BASE_CONFIG',
      useValue: {
        // uri: 'http://61.135.174.89:8010/api'
        uri: 'http://localhost:5000/api'
      }
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
  }
}
