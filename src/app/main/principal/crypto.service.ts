import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';

interface Crypto {
  name: string;
  isIncreased: boolean;
}

interface Video {
  url: string;
}

interface News {
  title: string;
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  getCryptos(): Observable<Crypto[]> {
    return interval(3000).pipe(
      map(() => this.generateCryptos())
    );
  }

  getVideos(): Observable<Video[]> {
    return of([
      { url: 'https://www.youtube.com/embed/example-video-id1' },
      { url: 'https://www.youtube.com/embed/example-video-id2' },
      // Add more videos as needed
    ]);
  }

  getNews(): Observable<News[]> {
    return of([
      { title: 'Crypto News 1', description: 'Description of news 1', url: 'https://example.com/news1' },
      // Add more news as needed
    ]);
  }

  private generateCryptos(): Crypto[] {
    return [
      { name: 'Bitcoin', isIncreased: Math.random() < 0.5 },
      { name: 'Ethereum', isIncreased: Math.random() < 0.5 },
      // Add more cryptocurrencies as needed
    ];
  }
}
