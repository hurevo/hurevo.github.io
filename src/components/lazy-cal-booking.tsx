import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

// Lazy load the CalBooking component
const CalBookingComponent = lazy(() => import("./cal-booking"));

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] w-full bg-muted/30 rounded-lg border border-border">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-sm text-muted-foreground">Loading calendar...</p>
    </div>
  );
}

export default function LazyCalBooking() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true);
          setHasBeenVisible(true);
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasBeenVisible]);

  return (
    <div ref={containerRef} className="w-full h-[600px]">
      {isVisible ? (
        <Suspense fallback={<LoadingSpinner />}>
          <CalBookingComponent />
        </Suspense>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
