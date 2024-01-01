"use client";

import { cn } from "@/lib/utils";
import {
  Group,
  CircleUser,
  MessageCircle,
  MessageSquarePlus,
  MoreVertical,
  Filter,
  Search,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ThemePreview = () => {
  return (
    <div className="flex bg-background h-[800px] text-text w-full px-28">
      {/* Left Sidebar  */}
      <div className="flex flex-col w-[450px] bg-secondary-dark">
        {/* Top Header */}
        <div className="flex justify-between bg-secondary-light py-2 px-4 items-center">
          <Image
            className="w-[42px] h-[42px] bg-text rounded-full shrink-0"
            src="https://picsum.photos/200?random=666"
            width={42}
            height={42}
            alt="You"
          />

          <div className="flex gap-6 text-text-dark [&>*]:cursor-pointer">
            <Group className="hover:text-text-darker" />
            <CircleUser className="hover:text-text-darker" />
            <MessageCircle className="hover:text-text-darker" />
            <MessageSquarePlus className="hover:text-text-darker" />
            <MoreVertical className="hover:text-text-darker" />
          </div>
        </div>

        {/* Search bar  */}
        <div className="my-2 text-text-darker flex px-4 gap-2 items-center">
          <div className="flex gap-12 items-center bg-secondary-light rounded-lg py-1.5 flex-1 px-4">
            <Search size={16} />
            <span>Search or start a new chat</span>
          </div>

          <Filter size={20} />
        </div>

        {/* Chat List */}
        <div className="flex flex-col">
          <ChatItem
            title="Bro"
            imageUrl="https://picsum.photos/200?random=1"
            lastMessage="You: We're going to eskişehir!"
            lastMessageDate="23:47"
            highlighted={true}
          />

          <ChatItem
            title="Ilyas Ipek"
            imageUrl="https://picsum.photos/200?random=2"
            lastMessage="You: so when do you wanna meetup?"
            lastMessageDate="13:07"
            highlighted={false}
          />

          <div className="flex gap-1 items-center justify-center w-full text-xs text-text-dark mt-4">
            <Lock size={16} />

            <span>Your personal messaged are</span>

            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-[#00aaff]"
              target="_blank"
            >
              end-to-end encrypted
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ThemePreview.displayName = "ThemePreviewChat";

export default ThemePreview;

type ChatItemProps = {
  imageUrl: string;
  title: string;
  lastMessage: string;
  lastMessageDate: string;
  highlighted: boolean;
};

const ChatItem = ({
  title,
  imageUrl,
  lastMessage,
  lastMessageDate,
  highlighted,
}: ChatItemProps) => {
  return (
    <div
      className={cn(
        "flex pt-4 pb-0 hover:bg-secondary-light hover:brightness-110 transition-all duration-75 cursor-pointer w-full gap-4",
        highlighted && "brightness-110 bg-secondary-light"
      )}
    >
      <Image
        className="w-[48px] h-[48px] bg-text rounded-full shrink-0 ml-4"
        src={imageUrl}
        width={48}
        height={48}
        alt={title}
      />

      <div className="flex justify-between w-full pb-4 border-b border-b-secondary-light pr-4">
        <div className="flex flex-col">
          <span className="text-lg">{title}</span>
          <span className="text-sm text-text-dark">{lastMessage}</span>
        </div>

        <div className="flex flex-col text-xs gap-2 text-text-darker items-end">
          <span>{lastMessageDate}</span>
        </div>
      </div>
    </div>
  );
};

ChatItem.displayName = "ChatItem";
