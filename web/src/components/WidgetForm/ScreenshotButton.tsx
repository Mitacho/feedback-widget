import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  onScreenshotTaken,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="
          flex h-10 w-10 items-end justify-end rounded-md
          border-transparent p-1 text-zinc-400
          transition-colors hover:text-zinc-100
        "
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        onClick={() => onScreenshotTaken(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="
        rounded-md border-transparent bg-zinc-800 p-2
        transition-colors hover:bg-zinc-700
        focus:outline-none focus:ring-2 focus:ring-brand-500
        focus:ring-offset-2 focus:ring-offset-zinc-900
      "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
    </button>
  );
}
