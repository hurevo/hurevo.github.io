import { Button } from "@/components/ui/button";
import LazyCalBooking from "../lazy-cal-booking";
// @ts-expect-error - paraglide messages import
import * as m from "@/paraglide/messages";

export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="w-full py-24 px-4 max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {m.contactHeader()}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {m.contactSubheader()}
        </p>
        <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-8">
          {m.contactSupportLine()}
        </p>
        <Button
          size="lg"
          className="h-14 px-10 text-lg font-semibold"
          onClick={() => {
            const calSection = document.getElementById('cal-booking-section');
            if (calSection) {
              calSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {m.contactCTA()}
        </Button>
      </div>

      <div id="cal-booking-section" className="flex flex-col">
        <h3 className="text-xl font-semibold text-center mb-6 text-muted-foreground">
          {m.contactBookCall()}
        </h3>
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm max-w-lg mx-auto w-full">
          <LazyCalBooking />
        </div>
      </div>
    </section>
  );
}
