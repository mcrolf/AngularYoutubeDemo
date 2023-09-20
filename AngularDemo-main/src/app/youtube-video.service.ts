import { Injectable } from '@angular/core';
import { YTVideo } from './yt-video';

@Injectable({
  providedIn: 'root'
})


export class YoutubeVideoService {

// url for json db
  url = "http://localhost:3000/videos";

// calls the db to get all videos
  // async getAllVideos(): Promise<YTVideo[]> {
  //   const data = await fetch(`${this.url}`);
  //   let buf = await data.json;
  //   return buf ?? [];
  // }

// calls db to get videos by title
  // async getVideosByTitle(title: string): Promise<YTVideo | undefined> {
  //   const data = await fetch(`${this.url}/${title}`);
  //   let buf = await data.json;
  //   return buf ?? {};
  // }

  //constructor() { }
}
