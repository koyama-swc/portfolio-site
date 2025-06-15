
import React from "react";
import type { MediaItem } from "@/lib/fetchFeeds";
import Image from "next/image";
import { FaYoutube, FaHeadphones, FaPen } from "react-icons/fa";


  title: string;
  link: string;
  thumbnail?: string;
}

interface MediaInfo {
  id: string;
  name: string;
  icon: JSX.Element;
  rss: string;
  channelUrl: string; // main page link
  getThumbnail: (entryLink: string) => string;
}

const mediaList: MediaInfo[] = [
  {
    id: "youtube",
    name: "YouTube",
    icon: <FaYoutube className="text-4xl text-red-600" />,
    rss: "https://www.youtube.com/feeds/videos.xml?channel_id=UCBxgrkoP_3GenjTao0CaAKg",
    channelUrl: "https://www.youtube.com/channel/UCBxgrkoP_3GenjTao0CaAKg",
    getThumbnail: (link) => {
      const videoIdMatch = link.match(/v=([A-Za-z0-9_-]+)/);
      const id = videoIdMatch ? videoIdMatch[1] : "";
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "https://placehold.co/400x200?text=No+Image";
    },
  },
  {
    id: "standfm",
    name: "stand.fm",
    icon: <FaHeadphones className="text-4xl text-purple-600" />,
    rss: "https://stand.fm/feeds/episodes/6649cf88316143a771c72242",
    channelUrl: "https://stand.fm/channels/6649cf88316143a771c72242",
    getThumbnail: (link) => {
      return "https://placehold.co/400x200?text=stand.fm";
    },
  },
  {
    id: "note",
    name: "note",
    icon: <FaPen className="text-4xl text-green-600" />,
    rss: "https://note.com/koyama_swc/rss",
    channelUrl: "https://note.com/koyama_swc",
    getThumbnail: (link) => {
      return "https://placehold.co/400x200?text=note";
    },
  },
];

(xmlText: string): RssItem | null {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, "text/xml");

    // Try common patterns
    let node: Element | null =
      doc.querySelector("channel > item") || // standard RSS
      doc.querySelector("item") ||
      doc.querySelector("entry"); // Atom

    if (!node) {
      console.warn("RSS parse: item/entry not found", xmlText.slice(0, 200));
      return null;
    }
    if (!node) return null;

    // title
    const title = node.querySelector("title")?.textContent || "";

    // link
    let link = node.querySelector("link")?.textContent || "";
    // For Atom feed, <link href="..."/>
    if (!link) {
      const linkEl = node.querySelector("link[rel='alternate']") || node.querySelector("link");
      link = linkEl ? (linkEl.getAttribute("href") || "") : "";
    }

    return { title, link };
  } catch {
    return null;
  }
}

interface Props {
  feeds: Record<string, MediaItem | null>;
}

export default function LatestMedia({ feeds }: Props) {



    mediaList.forEach(async (media) => {
      try {
        let item: RssItem | null = null;

        // 1) rss2json で JSON 取得を試みる
        try {
          const resp = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(media.rss)}`
          );
          if (resp.ok) {
            const json = await resp.json();
            if (json.status === "ok" && json.items && json.items.length > 0) {
              const first = json.items[0];
              item = {
                title: first.title,
                link: first.link,
                thumbnail: first.thumbnail,
              };
            }
          }
        } catch (e) {
          console.warn("rss2json error", media.id, e);
        }

        // 2) 失敗した場合は CORS プロキシ経由で XML を取得し自前でパース
        if (!item) {
          try {
            const xml = await fetch(
              `https://cors.isomorphic-git.org/${media.rss}`
            ).then((r) => r.text());
            item = parseRss(xml);
          } catch (e) {
            console.warn("XML fetch error", media.id, e);
          }
        }

        setEntries((prev) => ({ ...prev, [media.id]: item }));
      } catch (err) {
        console.warn("fetch chain error", media.id, err);
        setEntries((prev) => ({ ...prev, [media.id]: null }));
      }
    });


/*
    mediaList.forEach((media) => {
      // Use different fetching strategy based on service
      if (media.id === "note" || media.id === "standfm") {
        // Fetch raw XML via Allorigins proxy and parse
        fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(media.rss)}`)
          .then((res) => res.text())
          .then((xml) => {
            const item = parseRss(xml);
            setEntries((prev) => ({ ...prev, [media.id]: item }));
          })
          .catch(() => {
            setEntries((prev) => ({ ...prev, [media.id]: null }));
          });
      } else {
        // YouTube via rss2json for easy thumbnail retrieval
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(media.rss)}`)
          .then((res) => res.json())
          .then((json) => {
            if (json.items && json.items.length > 0) {
              const first = json.items[0];
              const item: RssItem = { title: first.title, link: first.link, thumbnail: first.thumbnail };
              setEntries((prev) => ({ ...prev, [media.id]: item }));
            } else {
              setEntries((prev) => ({ ...prev, [media.id]: null }));
            }
          })
          .catch(() => {
            setEntries((prev) => ({ ...prev, [media.id]: null }));

*/
return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title mb-10">MEDIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaList.map((media) => {
            const entry = feeds[media.id];
            const thumbnail = entry ? media.getThumbnail(entry.link) : media.getThumbnail("");
            return (
              <div key={media.id} className="card overflow-hidden bg-black/70 backdrop-blur flex flex-col">
                <a href={entry ? entry.link : media.channelUrl} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-48">
                    <img src={thumbnail} alt={`${media.name} thumbnail`} className="object-cover w-full h-full" loading="lazy" />
                  </div>
                </a>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex items-center gap-2">
                    {media.icon}
                    <h3 className="text-xl font-bold">{media.name}</h3>
                  </div>
                  {entry ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:underline mt-auto"
                    >
                      {entry.title}
                    </a>
                  ) : (
                    <p className="text-gray-400 mt-auto">最新投稿を取得できませんでした</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
