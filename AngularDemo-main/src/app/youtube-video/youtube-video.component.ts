import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoModule } from './youtube-video.module';
import { YoutubeVideoService } from '../youtube-video.service';
import { YTVideo } from '../yt-video';


@Component({
    selector: 'app-video',
    //standalone: true,
    //imports: [CommonModule, YoutubeVideoModule],
    template: `<video autoplay muted controls id="vid" >
        <source src="https://d3uri9aqa5oz7e.cloudfront.net/TestVideo1.mp4" type="video/mp4">
    </video>`,
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