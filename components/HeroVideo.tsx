"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";

const FADE_SECONDS = 0.7;
const FALLBACK_POSTER = "/images/hero-black-aircraft-generated.png";
const HERO_VIDEO = "/videos/novin-air-hero-loop.mp4";

export function HeroVideo() {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef(0);
  const durationRef = useRef(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [ready, setReady] = useState(false);

  const playVideo = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Mobile browsers can defer autoplay until the element is visible.
      });
    }
  }, []);

  const markReady = useCallback(() => {
    const primaryVideo = firstVideoRef.current;
    if (!primaryVideo || ready) return;

    durationRef.current = primaryVideo.duration || 0;
    setReady(true);
    playVideo(primaryVideo);
  }, [playVideo, ready]);

  useEffect(() => {
    if (!ready || durationRef.current <= FADE_SECONDS + 0.8) return;

    let transitionTimer = 0;
    let resetTimer = 0;

    const videos = [firstVideoRef.current, secondVideoRef.current];

    const scheduleTransition = () => {
      const durationMs = durationRef.current * 1000;
      const transitionAt = Math.max(900, durationMs - FADE_SECONDS * 1000);

      transitionTimer = window.setTimeout(() => {
        const currentIndex = activeVideoRef.current;
        const nextIndex = currentIndex === 0 ? 1 : 0;
        const currentVideo = videos[currentIndex];
        const nextVideo = videos[nextIndex];

        if (!currentVideo || !nextVideo) {
          scheduleTransition();
          return;
        }

        nextVideo.currentTime = 0;
        playVideo(nextVideo);
        activeVideoRef.current = nextIndex;
        setActiveVideo(nextIndex);

        resetTimer = window.setTimeout(() => {
          currentVideo.pause();
          currentVideo.currentTime = 0;
          scheduleTransition();
        }, FADE_SECONDS * 1000);
      }, transitionAt);
    };

    scheduleTransition();

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(resetTimer);
    };
  }, [playVideo, ready]);

  return (
    <>
      <Image
        src={assetPath(FALLBACK_POSTER)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[42%_50%]"
      />
      {[0, 1].map((index) => (
        <video
          key={index}
          ref={index === 0 ? firstVideoRef : secondVideoRef}
          aria-hidden="true"
          autoPlay={index === 0}
          className={`hero-video-layer ${
            activeVideo === index && ready ? "opacity-100" : "opacity-0"
          }`}
          disablePictureInPicture
          loop
          muted
          playsInline
          poster={assetPath(FALLBACK_POSTER)}
          preload="auto"
          onCanPlay={() => {
            if (index === 0) markReady();
          }}
          onLoadedMetadata={index === 0 ? markReady : undefined}
        >
          <source src={assetPath(HERO_VIDEO)} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
