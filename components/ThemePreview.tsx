"use client";

import { useThemeSwitcherStore } from "@/lib/theme-store";
import { Theme } from "@/lib/types/theme";
import { cn, getOppositeHexColor } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

type ThemePreview = {
  theme: Theme;
  isSelected?: boolean;

  onClick: () => void;
  onDelete: () => void;
};

export function ThemePreview(props: ThemePreview) {
  const { isTextEnabled } = useThemeSwitcherStore();

  return (
    <div
      className="hover:bg-slate-300 p-2 rounded-2xl transition-all w-fit cursor-pointer"
      onClick={props.onClick}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl p-2 w-[170px] gap-2 border transition-all duration-100",
          props.isSelected && "border-[4px] border-blue-500"
        )}
        style={{
          backgroundColor: props.theme.background,
          color: getOppositeHexColor(props.theme.background),
        }}
      >
        {/* Primary */}
        <div className="relative w-full">
          <div
            className="w-[100px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.primary,
              color: getOppositeHexColor(props.theme.primary),
            }}
          >
            {isTextEnabled && <span>Primary</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.primary}
              </span>
            )}
          </div>

          {/* Primary Dark */}
          <div
            className="absolute top-0 right-0 w-[51px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.primaryDark,
              color: getOppositeHexColor(props.theme.primaryDark),
            }}
          >
            {isTextEnabled && <span className="text-xs opacity-50">dark</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.primaryDark}
              </span>
            )}
          </div>

          {/* Primary Light*/}
          <div
            className="absolute bottom-0 right-0 w-[51px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.primaryLight,
              color: getOppositeHexColor(props.theme.primaryLight),
            }}
          >
            {isTextEnabled && <span className="text-xs opacity-50">light</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.primaryLight}
              </span>
            )}
          </div>
        </div>

        {/* Secondary */}
        <div className="relative w-full">
          <div
            className="w-[100px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.secondary,
              color: getOppositeHexColor(props.theme.secondary),
            }}
          >
            {isTextEnabled && <span>Secondary</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.secondary}
              </span>
            )}
          </div>

          {/* Secondary Dark */}
          <div
            className="absolute top-0 right-0 w-[51px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.secondaryDark,
              color: getOppositeHexColor(props.theme.secondaryDark),
            }}
          >
            {isTextEnabled && <span className="text-xs opacity-50">dark</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.secondaryDark}
              </span>
            )}
          </div>

          {/* Secondary Light*/}
          <div
            className="absolute bottom-0 right-0 w-[51px] aspect-square rounded-xl flex flex-col text-center items-center justify-center"
            style={{
              backgroundColor: props.theme.secondaryLight,
              color: getOppositeHexColor(props.theme.secondaryLight),
            }}
          >
            {isTextEnabled && <span className="text-xs opacity-50">light</span>}

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.secondaryLight}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between w-full">
          {/* Text Colors */}
          <div className="flex flex-col leading-tight">
            <div className="flex flex-col">
              <span style={{ color: props.theme.text }}>Text</span>

              {isTextEnabled && (
                <span
                  style={{ color: props.theme.text }}
                  className="text-[9px]"
                >
                  {props.theme.text}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span style={{ color: props.theme.textDark }}>Text Dark</span>

              {isTextEnabled && (
                <span
                  className="text-[9px]"
                  style={{ color: props.theme.textDark }}
                >
                  {props.theme.textDark}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span style={{ color: props.theme.textDarker }}>Text Darker</span>

              {isTextEnabled && (
                <span
                  className="text-[9px]"
                  style={{ color: props.theme.textDarker }}
                >
                  {props.theme.textDarker}
                </span>
              )}
            </div>
          </div>

          {/* Message Read */}
          <div className="flex flex-col items-end">
            <CheckCheck color={props.theme.messageRead} />

            {isTextEnabled && (
              <span className="text-[9px] opacity-50">
                {props.theme.messageRead}
              </span>
            )}
          </div>
        </div>

        {isTextEnabled && (
          <div className="self-end text-[9px] opacity-50">
            {props.theme.background}
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col items-center justify-center text-center">
        <span>{props.theme.name}</span>

        {props.isSelected && <span className="italic text-xs">(Selected)</span>}
      </div>
    </div>
  );
}
