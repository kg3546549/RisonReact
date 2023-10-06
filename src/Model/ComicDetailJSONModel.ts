export default interface ComicDetailJSON {
  "comicInfo": {
    "id":number,
    "title":string,
    "thumbnail":string,
    "author":string,
    "description":string,
    "lastUpdate":string,
    "viewCount":number,
    "niceCount":number,
    "tag":[]
  },
  "episodes": [
    {
      "title":string,
      "thumnail": string,
      "viewCount": number,
      "niceCount": number,
      "adultOnly": boolean,
      "cid": number
    },
  ]
}
