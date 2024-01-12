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
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import BackgroundGraphic from "./BackgroundGraphic";

const chatContext = createContext<{
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isChatOpen: false,
  setIsChatOpen: () => {},
});

const ThemePreview = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="flex h-[950px] text-text w-full px-28 pt-4">
      {/* Left Sidebar  */}
      <div className="flex flex-col w-[450px] bg-secondary-dark border-r border-r-secondary-light">
        {/* Top Header */}
        <div className="flex justify-between bg-secondary-light px-4 items-center h-[64px]">
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
          <chatContext.Provider
            value={{
              isChatOpen,
              setIsChatOpen,
            }}
          >
            <ChatItem
              title="Bro"
              imageUrl="https://picsum.photos/200?random=1"
              lastMessage="You: We're going to eskişehir!"
              lastMessageDate="23:47"
            />

            <ChatItem
              title="Ilyas Ipek"
              imageUrl="https://picsum.photos/200?random=2"
              lastMessage="You: so when do you wanna meetup?"
              lastMessageDate="13:07"
            />
          </chatContext.Provider>

          <div className="flex gap-1 items-center justify-center w-full text-xs mt-4">
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

      {/* Chat */}
      <div className="relative flex flex-col flex-1">
        {/* Chat Header */}
        {!isChatOpen && (
          <div
            className={cn(
              "relative flex flex-col flex-1 justify-center bg-secondary-light py-2 px-4 items-center w-full"
            )}
          >
            <BackgroundGraphic />

            <div className="flex flex-col gap-4 mt-12 text-center">
              <h1 className="text-3xl font-normal">Not WhatsApp Web</h1>

              <p className="text-text-darker">
                {`This is not whatsapp web, so don't be fooled. It's just a`}
                <br />
                mock site meant to test out the theme picker with a live preview
              </p>
            </div>

            <div className="absolute bottom-10 flex gap-1 items-center justify-center w-full text-sm text-text-darker mt-4">
              <Lock size={16} />
              <span>Your personal messaged are end-to-end encrypted</span>
            </div>
          </div>
        )}

        {isChatOpen && (
          <>
            <div
              className={cn(
                "flex justify-between bg-secondary-light py-2 px-4 items-center h-[64px] w-full",
                !isChatOpen && "flex-1"
              )}
            >
              <div className="flex items-center gap-3">
                <Image
                  className="w-[42px] h-[42px] bg-text rounded-full shrink-0"
                  src="https://picsum.photos/200?random=2"
                  width={42}
                  height={42}
                  alt="Chattee Profile Pic"
                />

                <div className="flex flex-col">
                  <span>Ilyas Ipek</span>
                  <span className="text-sm text-text-darker">
                    last seen today at 13:07
                  </span>
                </div>
              </div>

              <div className="flex gap-6 text-text-dark [&>*]:cursor-pointer">
                <Search />
                <MoreVertical className="hover:text-text-darker" />
              </div>
            </div>

            {/* Background Image  */}
            <div
              className="inset-0 absolute w-full flex-1 flex flex-col"
              style={{
                backgroundImage: `url(chat-bg.png)`,
                backgroundSize: "contain",
                opacity: 0.06,
                zIndex: -1,
              }}
            />

            {/* Messages & Input  */}
            <div className="w-full flex flex-col flex-1 min-h-0">
              {/* Messages  */}
              <div className="flex flex-col flex-1 overflow-y-auto gap-6">
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
                <span>foo</span>
              </div>

              {/* Input  */}
              <div className="h-[56px] bg-secondary w-full"></div>
            </div>
          </>
        )}
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
};

const ChatItem = ({
  title,
  imageUrl,
  lastMessage,
  lastMessageDate,
}: ChatItemProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { setIsChatOpen } = useContext(chatContext);

  const onChatClicked = () => {
    setIsHighlighted((state) => !state);
    setIsChatOpen((state) => !state);
  };

  return (
    <div
      className={cn(
        "group flex pt-4 pb-0 hover:bg-secondary-light hover:brightness-110 transition-all duration-75 cursor-pointer w-full gap-4",
        isHighlighted && "brightness-110 bg-secondary-light"
      )}
      onClick={onChatClicked}
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
          <ChevronDown
            size={21}
            className={cn(
              "group-hover:opacity-100 opacity-0 transition-all duration-75"
            )}
          />
        </div>
      </div>
    </div>
  );
};

ChatItem.displayName = "ChatItem";
