import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoModule } from './youtube-video.module';
import { YoutubeVideoService } from '../youtube-video.service';
import { YTVideo } from '../yt-video';


@Component({
    selector: 'app-video',
    //standalone: true,
    //imports: [CommonModule, YoutubeVideoModule],
    template: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eiSuSJyn9B8?si=JJZQr6ta984IEHlK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
})

export class YoutubeVideoComponent {
    // ngOnInit() {
        
    //     //let id = "Ldq2jj98SQBJdWGg";
    //     const tag = document.createElement('script');

    //     tag.src = "https://www.youtube.com/iframe_api";
    //     document.body.appendChild(tag);
    // }

    // videoList = YTvideo[] = [];

    // filterResults(test: string) {
    //     if (!text) {

    //     }
    // }
}