import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    template: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vy6P-6Pquoo?si=piQ1NFdhRw5xrmT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
})

export class YoutubeVideoComponent implements OnInit {
    ngOnInit() {
        
        let id = "Ldq2jj98SQBJdWGg";
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}