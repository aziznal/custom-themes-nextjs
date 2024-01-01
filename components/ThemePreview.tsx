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
  Pin,
} from "lucide-react";

const ThemePreview = () => {
  return (
    <div className="flex bg-background h-[800px] text-text w-full px-28">
      {/* Left Sidebar  */}
      <div className="flex flex-col w-[450px] bg-secondary-dark">
        {/* Top Header */}
        <div className="flex justify-between bg-secondary-light py-2 px-4 items-center">
          <div className="w-[42px] h-[42px] bg-text rounded-full"></div>

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
            title="Ahmet"
            imageUrl=""
            lastMessage="You: We're going to eskişehir!"
            lastMessageDate="23:47"
            highlighted={true}
          />

          <ChatItem
            title="ilyas"
            imageUrl=""
            lastMessage="You: so when do you wanna meetup?"
            lastMessageDate="13:07"
            highlighted={false}
          />
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
        "flex p-4 hover:bg-secondary-light hover:brightness-110 transition-all duration-75 cursor-pointer w-full gap-4",
        highlighted && "brightness-110 bg-secondary-light"
      )}
    >
      <div className="w-[48px] h-[48px] bg-text rounded-full shrink-0"></div>

      <div className="flex justify-between w-full">
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
