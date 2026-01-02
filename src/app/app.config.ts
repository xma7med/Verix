import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter  , withInMemoryScrolling} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    // provideRouter(routes) 
  

   provideRouter(
      routes,
      withInMemoryScrolling({
        // scrollPositionRestoration: 'enabled',
         anchorScrolling: 'enabled',
         scrollPositionRestoration: 'top',
        // scrollOffset: [0, 120], // ارتفاع الـ navbar
        //     scrollPositionRestoration: 'disabled',
        // scrollOffset: [0, 120], // ارتفاع الـ navbar
        
      })
    ),
  ],
};

