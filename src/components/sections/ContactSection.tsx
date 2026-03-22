import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import LazyCalBooking from "../lazy-cal-booking";
// @ts-expect-error - paraglide messages import
import * as m from "@/paraglide/messages";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const targetEmail = "hello@cognerest.com";
    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Description:\n${description}`,
    );

    window.open(
      `mailto:${targetEmail}?subject=${subject}&body=${body}`,
      "_blank",
    );
  };

  const trustSignals = [
    m.contactTrust1(),
    m.contactTrust2(),
    m.contactTrust3(),
  ];

  return (
    <section
      id="contact-section"
      className="w-full py-20 px-4 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {m.contactHeader()}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {m.contactSubheader()}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    {m.contactNameLabel()}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder={m.contactNamePlaceholder()}
                    className="text-base py-5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    {m.contactEmailLabel()}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={m.contactEmailPlaceholder()}
                    className="text-base py-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">
                    {m.contactDescLabel()}
                  </Label>
                  <Textarea
                    id="description"
                    placeholder={m.contactDescPlaceholder()}
                    rows={4}
                    className="text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-xl font-semibold"
                >
                  {m.contactSubmit()}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  {m.contactStartNote()}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-6">{m.contactBookCall()}</h3>
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm">
            <LazyCalBooking />
          </div>
        </div>
      </div>
    </section>
  );
}
