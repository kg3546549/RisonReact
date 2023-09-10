export default interface AllComicList {
  "comicListCount": number,
  "comicList": [
    {
      "id": number,
      "title": string,
      "thumbnail": string,
      "authorID": number,
      "lastUpdate": string,
      "viewCount": number,
      "niceCount": number,
      "tag": string[]
    }
  ]
}
