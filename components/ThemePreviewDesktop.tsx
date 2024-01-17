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
  Check,
  CheckCheck,
  Plus,
  Smile,
  Mic,
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

const ThemePreviewDesktop = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="flex w-2/3 text-text shrink-0">
      {/* Left Sidebar  */}
      <div className="flex shrink-0 flex-col w-[450px] bg-secondary-dark border-r border-r-secondary-light">
        {/* Top Header */}
        <div className="flex justify-between bg-secondary-light px-4 items-center h-[64px] border-r border-r-secondary">
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
        <div className="flex flex-col overflow-y-auto pb-12">
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
              title="Cave Johnson"
              imageUrl="https://picsum.photos/200?random=2"
              lastMessage="You: The cake is a lie 🍰"
              lastMessageDate="13:07"
            />
          </chatContext.Provider>

          <div className="flex gap-1 items-center justify-center w-full text-xs mt-4">
            <Lock size={16} />

            <span>Your personal messages are</span>

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
              <span>Your personal messages are end-to-end encrypted</span>
            </div>
          </div>
        )}

        {isChatOpen && (
          <>
            <div
              className={cn(
                "flex justify-between bg-secondary-light py-2 px-4 items-center h-[64px] shrink-0 w-full",
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
                  <span>Cave Johnson</span>

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
            <div className="w-full flex flex-col min-h-0">
              {/* Messages  */}
              <div className="flex flex-col flex-1 overflow-y-auto gap-1 pb-4 px-14">
                {/* Date Marker  */}
                <div className="text-center px-4 py-2 mt-2 bg-secondary-dark mx-auto w-fit rounded-lg text-sm text-text-darker">
                  YESTERDAY
                </div>

                <Message side="left" time="09:00">
                  Morning, Caroline! Did you see that new perpetual motion
                  machine prototype?
                </Message>

                <Message side="right" time="09:01" received={true} read={true}>
                  Good morning, Mr. Johnson! Yes, I did. It{`'`}s... perpetually
                  moving.
                </Message>

                <Message side="left" time="09:02">
                  That{`'`}s the spirit! It{`'`}s science – if it{`'`}s not
                  moving, it{`'`}s probably dead.
                </Message>

                <Message side="left" time="09:02">
                  Speaking of dead, how{`'`}s that project with the combustible
                  lemons coming along?
                </Message>

                <Message side="right" time="09:03" received={true} read={true}>
                  We{`'`}re on it, but there{`'`}s a slight issue with the...
                  combustion part.
                </Message>

                <Message side="right" time="09:03" received={true} read={true}>
                  They{`'`}re exploding a bit too... enthusiastically.
                </Message>

                <Message side="left" time="09:04">
                  Excellent! If life gives you lemons, make life take the lemons
                  back!
                </Message>

                <Message side="right" time="09:05" received={true} read={true}>
                  Exactly, sir. Although the lab needs a new coat of paint now.
                  And possibly a new lab.
                </Message>

                <Message side="left" time="09:06">
                  A small price to pay for innovation, Caroline! What{`'`}s
                  science without a few... explosions?
                </Message>

                <Message side="left" time="09:06">
                  Oh, and how{`'`}s our AI project going?
                </Message>

                <Message side="right" time="09:07" received={true} read={true}>
                  Progressing well. The AI can now understand over 50,000 words.
                  And it made a joke today.
                </Message>

                <Message side="left" time="09:08">
                  A joke? Our AI? Do tell!
                </Message>

                <Message side="right" time="09:09" received={true} read={true}>
                  It said, {`'`}I{`'`}m a super intelligent AI, and even I can
                  {`'`}t solve why humans need sleep.{`'`}
                </Message>

                <Message side="left" time="09:10">
                  Hah! Sleep, who needs it? We have science to do.
                </Message>

                <Message side="left" time="09:11">
                  Keep up the good work, Caroline. Remember, we do what we must
                  because we can.
                </Message>

                <Message side="right" time="09:12" received={true} read={true}>
                  For the good of all of us. Except the ones who are dead.
                </Message>

                <Message side="left" time="09:13">
                  That{`'`}s the spirit! Now, about those lemons...
                </Message>

                <Message side="right" time="09:14" received={true} read={true}>
                  I{`'`}ll order more fire extinguishers.
                </Message>

                <Message side="left" time="09:15">
                  Good call. And let{`'`}s get some more of those {`'`}
                  accident-free{`'`}
                  signs. We{`'`}re setting a new record soon!
                </Message>
                <Message side="right" time="09:16" received={true} read={true}>
                  Will do, Mr. Johnson. Though, I think we might be interpreting
                  {`'`}accident-free{`'`} a bit liberally.
                </Message>
                <Message side="left" time="09:17">
                  Caroline, in science, {`'`}liberal interpretation{`'`} is just
                  another term for {`'`}innovation{`'`}.
                </Message>
                <Message side="right" time="09:18" received={true} read={true}>
                  Of course, sir. Innovation it is!
                </Message>
                <Message side="left" time="09:19">
                  That{`'`}s what I like to hear! Let{`'`}s go make some science
                  history.
                </Message>
                <Message side="right" time="09:20" received={true} read={true}>
                  Right behind you, sir. With a fire extinguisher. Just in case.
                </Message>
                <Message side="left" time="09:21">
                  Ha! That{`'`}s the Cave Johnson way!
                </Message>
                <Message side="right" time="09:22" received={true} read={true}>
                  Indeed, Mr. Johnson. Have a great day making science!
                </Message>
                <Message side="left" time="09:23">
                  You too, Caroline. You too!
                </Message>
              </div>

              {/* Input  */}
              <div className="h-[64px] bg-secondary w-full flex items-center">
                <Plus className="px-6 w-fit shrink-0 text-text-darker" />

                <div className="flex-1 h-[44px] bg-secondary-light brightness-[140%] flex items-center rounded-lg">
                  <Smile className="text-text-darker ml-4" />

                  <span className="text-text-darker ml-4 text-sm">
                    Type a message
                  </span>
                </div>

                <Mic className="px-6 w-fit shrink-0 text-text-darker" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ThemePreviewDesktop.displayName = "ThemePreviewChat";

export default ThemePreviewDesktop;

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

type MessageProps = {
  children: React.ReactNode;
  side: "left" | "right";
  time: string;
  received?: boolean;
  read?: boolean;
};

export const Message = ({
  children,
  side,
  time,
  received,
  read,
}: MessageProps) => {
  return (
    <div
      className={cn(
        "relative p-2 pr-16 max-w-[48%] rounded-lg text-sm min-h-fit",
        side === "left" ? "self-start bg-secondary" : "self-end bg-primary"
      )}
    >
      {children}

      <span
        className={cn(
          "absolute text-[11px] text-text-dark",
          side === "left" ? "right-2 bottom-0" : "right-7 bottom-0"
        )}
      >
        {time}
      </span>

      {side === "right" && (
        <span className="absolute bottom-1 right-2">
          {!received && <Check size={16} className="text-text-dark" />}

          {received && !read && (
            <CheckCheck size={16} className="text-text-dark" />
          )}

          {read && <CheckCheck size={16} className="text-messageRead" />}
        </span>
      )}
    </div>
  );
};
