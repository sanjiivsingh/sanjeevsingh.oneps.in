"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ShieldCheck, Cpu, Terminal, Layers, Film, Sparkles } from "lucide-react";

export function HighTechVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [reelMode, setReelMode] = useState<"preview" | "master">("master");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(40);

  const videoSrcMp4 = reelMode === "master" ? "/videos/showreel_master.mp4" : "/videos/intro.mp4";
  const videoSrcWebm = reelMode === "preview" ? "/videos/intro.webm" : undefined;

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  }, [reelMode]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    setHasInteracted(true);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#070b16] border border-cyan-500/30 shadow-[0_0_35px_rgba(2,132,199,0.2)] font-mono text-xs">
      {/* Top Engineering Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1328]/95 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          <span className="ml-2 text-cyan-400 font-semibold tracking-wider text-[11px] flex items-center gap-1.5 font-sans">
            <Layers size={13} className="text-cyan-400" /> CLOUD SHOWREEL // SANJEEV SINGH
          </span>
        </div>
        
        {/* Toggle Mode: Master (66s) vs Preview (24s) */}
        <div className="flex items-center gap-1.5">
          <div className="bg-slate-900/90 p-0.5 rounded-lg border border-slate-800 flex items-center text-[10px]">
            <button
              onClick={() => setReelMode("master")}
              className={`px-2 py-0.5 rounded cursor-pointer transition ${
                reelMode === "master"
                  ? "bg-sky-600 text-white font-bold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Introduction Reel (40s)
            </button>
            <button
              onClick={() => setReelMode("preview")}
              className={`px-2 py-0.5 rounded cursor-pointer transition ${
                reelMode === "preview"
                  ? "bg-sky-600 text-white font-bold shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              WebM Format (40s)
            </button>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
            HD Video
          </span>
        </div>
      </div>

      {/* Main Video Frame */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          key={videoSrcMp4}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/videos/poster.webp"
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          <source src={videoSrcMp4} type="video/mp4" />
          <track
            kind="captions"
            src="/videos/captions.vtt"
            srcLang="en"
            label="English"
            default={false}
          />
        </video>

        {/* Audio Prompt Overlay if still muted */}
        {isMuted && !hasInteracted && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-600/90 hover:bg-sky-500 text-white font-sans text-xs font-semibold shadow-lg backdrop-blur-sm transition-all hover:scale-105 cursor-pointer"
          >
            <VolumeX size={14} /> Unmute Audio Track
          </button>
        )}

        {/* Subtle HUD crosshair watermark */}
        <div className="absolute inset-0 pointer-events-none border border-cyan-500/10 m-2 rounded-lg"></div>
      </div>

      {/* Scrubber Progress Bar */}
      <div className="w-full bg-slate-900 h-1">
        <div
          className="bg-gradient-to-r from-cyan-500 to-sky-400 h-1 transition-all duration-200"
          style={{ width: `${(currentTime / Math.max(duration, 1)) * 100}%` }}
        />
      </div>

      {/* Bottom Control & Capability Strip */}
      <div className="p-3 bg-[#0a1022] border-t border-slate-800/80 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 transition cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <button
              onClick={handleRestart}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              title="Restart"
            >
              <RotateCcw size={15} />
            </button>
            <span className="text-[11px] text-slate-300 ml-2 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)} //{" "}
              <span className="text-cyan-400 font-semibold">
                {reelMode === "master" ? "Full Master Engineering Reel" : "Quick Architecture Loop"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/videos/showreel_master.mp4"
              download="Sanjeev_Singh_Azure_Engineering_Showreel.mp4"
              className="text-[11px] text-slate-400 hover:text-cyan-400 transition hidden sm:inline"
              title="Download Master 1080p MP4"
            >
              Download MP4
            </a>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              title="Fullscreen"
            >
              <Maximize size={15} />
            </button>
          </div>
        </div>

        {/* Capability badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30 flex items-center gap-1">
            <Cpu size={11} /> Enterprise Azure Landing Zones
          </span>
          <span className="px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30 flex items-center gap-1">
            <Terminal size={11} /> Production Terraform IaC
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <ShieldCheck size={11} /> Shift-Left DevSecOps
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
            <Sparkles size={11} /> Azure Kubernetes (AKS)
          </span>
        </div>
      </div>
    </div>
  );
}
