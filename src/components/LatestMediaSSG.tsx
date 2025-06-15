import React from "react";
import Image from "next/image";
import { FaYoutube, FaHeadphones, FaPen } from "react-icons/fa";
import type { MediaItem } from "@/lib/fetchFeeds";

interface MediaInfo {
  id: string;
  name: string;
  icon: JSX.Element;
  channelUrl: string;
  getThumbnail: (link: string) => string;
}

const mediaList: MediaInfo[] = [
  {
    id: "youtube",
    name: "YouTube",
    icon: <FaYoutube className="text-4xl text-red-600" />,
    channelUrl: "https://www.youtube.com/channel/UCBxgrkoP_3GenjTao0CaAKg",
    getThumbnail: (link) => {
      const match = link.match(/v=([A-Za-z0-9_-]+)/);
      const id = match ? match[1] : "";
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "https://placehold.co/400x200?text=No+Image";
    },
  },
  {
    id: "standfm",
    name: "stand.fm",
    icon: <FaHeadphones className="text-4xl text-purple-600" />,
    channelUrl: "https://stand.fm/channels/6649cf88316143a771c72242",
    getThumbnail: () => "https://placehold.co/400x200?text=stand.fm",
  },
  {
    id: "note",
    name: "note",
    icon: <FaPen className="text-4xl text-green-600" />,
    channelUrl: "https://note.com/koyama_swc",
    getThumbnail: () => "https://placehold.co/400x200?text=note",
  },
];

interface Props {
  feeds: Record<string, MediaItem | null>;
}

const LatestMediaSSG: React.FC<Props> = ({ feeds }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title mb-10">MEDIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaList.map((media) => {
            const entry = feeds[media.id];
            const thumbnail = entry ? media.getThumbnail(entry.link) : media.getThumbnail("");
            return (
              <div
                key={media.id}
                className="card overflow-hidden bg-black/70 backdrop-blur flex flex-col"
              >
                <a
                  href={entry ? entry.link : media.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbnail}
                      alt={`${media.name} thumbnail`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
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
};

export default LatestMediaSSG;
