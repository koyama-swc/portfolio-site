import Parser from "rss-parser";

export interface MediaItem {
  id: string;
  title: string;
  link: string;
  thumbnail?: string;
}

const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    },
    timeout: 10000,
  },
});

const feeds: Record<string, string> = {
  youtube: "https://www.youtube.com/feeds/videos.xml?channel_id=UCBxgrkoP_3GenjTao0CaAKg",
  standfm: "https://stand.fm/feeds/episodes/6649cf88316143a771c72242",
  note: "https://note.com/koyama_swc/rss"
};

export async function getMediaFeeds(): Promise<Record<string, MediaItem | null>> {
  const result: Record<string, MediaItem | null> = {};

  await Promise.all(
    Object.entries(feeds).map(async ([id, url]) => {
      try {
        let feed;
        try {
          feed = await parser.parseURL(url);
        } catch {
          // fallback via jina.ai if direct fetch fails (e.g., 403)
          const jinUrl = `https://r.jina.ai/http://` + url.replace(/^https?:\/\//, "");
          feed = await parser.parseURL(jinUrl);
        }
        const first = feed.items?.[0];
        if (first && first.title && first.link) {
          let thumbnail: string | undefined;
          if (id === "youtube") {
            // Extract video ID from link
            const match = first.link.match(/v=([A-Za-z0-9_-]+)/);
            const vid = match ? match[1] : "";
            thumbnail = vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : undefined;
          } else {
            thumbnail = `https://placehold.co/400x200?text=${id}`;
          }
          result[id] = { id, title: first.title, link: first.link, thumbnail };
        } else {
          result[id] = null;
        }
      } catch {
        result[id] = null;
      }
    })
  );

  return result;
}
