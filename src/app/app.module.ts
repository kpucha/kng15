import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './v2/blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { isDevMode, NgModule } from '@angular/core';
import { LayoutModule } from './modules/layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from './v2/material/material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './modules/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { V2Module } from './v2/v2.module';

/**
 * Description
 *
 * @export
 * @param {HttpBackend} httpBackend
 * @returns {*}
 */
export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' },
    { prefix: './assets/i18n/privacy-policy/', suffix: '.json' },
    { prefix: './assets/i18n/cookies-policy/', suffix: '.json' },
  ]);
}
/**
 * Description
 *
 * @export
 * @class AppModule
 * @typedef {AppModule}
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    FontAwesomeModule,
    MarkdownModule.forRoot(),
    MaterialModule,
    BlogModule,
    V2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
