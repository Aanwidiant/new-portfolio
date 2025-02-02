import { useEffect, useState, useRef, useCallback } from "react";
import Checklist from "@/components/icons/checklist";
import Cancel from "@/components/icons/cancel";
import Warning from "@/components/icons/warning";
import Info from "@/components/icons/info";
import Close from "@/components/icons/close";

interface NotificationProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

const iconMap = {
  success: <Checklist className="fill-success w-6 h-6" />,
  error: <Cancel className="fill-error w-6 h-6" />,
  warning: <Warning className="fill-warning w-6 h-6" />,
  info: <Info className="fill-info w-6 h-6" />,
};

export default function Notification({
  type,
  message,
  description,
  duration = 3000,
  onClose,
}: NotificationProps) {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const pausedTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(100);
  const [progress, setProgress] = useState(100);

  const closeNotification = useCallback(() => {
    setIsFading(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    if (!visible) return;

    let timer: NodeJS.Timeout;

    const updateProgress = () => {
      if (!isHovered && !isFading) {
        const currentTime = Date.now();
        const elapsed = currentTime - startTimeRef.current;
        const newProgress = Math.max(0, 100 - (elapsed / duration) * 100);
        progressRef.current = newProgress;
        setProgress(newProgress);

        if (newProgress > 0) {
          timer = setTimeout(updateProgress, 16);
        } else {
          closeNotification();
        }
      }
    };

    if (!isHovered) {
      if (pausedTimeRef.current > 0) {
        startTimeRef.current = Date.now() - pausedTimeRef.current;
        pausedTimeRef.current = 0;
      }
      updateProgress();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isHovered, duration, visible, isFading, closeNotification]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    pausedTimeRef.current = Date.now() - startTimeRef.current;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    startTimeRef.current = Date.now() - pausedTimeRef.current;
  }, []);

  if (!visible) return null;

  const progressBarColor = {
    success: "bg-success",
    error: "bg-error",
    warning: "bg-warning",
    info: "bg-info",
  }[type];

  return (
    <div
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-light dark:bg-dark rounded-lg p-4 flex flex-col items-start gap-4 w-full max-w-md overflow-hidden cursor-pointer shadow-sm shadow-dark/50 dark:shadow-light/50 ${isFading ? "animate-fade-out" : "animate-slide-in"
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start gap-4 w-full">
        {iconMap[type]}
        <div className="flex-1">
          <h3 className="font-semibold">{message}</h3>
          {description && (
            <p className="text-sm text-dark-etd dark:text-light-etd">
              {description}
            </p>
          )}
        </div>
        <button
          onClick={closeNotification}
          className="hover:scale-125 transition-transform"
        >
          <Close className="fill-dark dark:fill-light w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full ${progressBarColor} transition-all duration-300 ease-linear`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}