import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import CalBooking from '../cal-booking';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const targetEmail = 'hello@hurevo.com'; // You can change this to your desired email
    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Description:\n${description}`
    );

    window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact-section" className="w-full py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's build something great.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your project or automate a workflow. We'll get back to you within 48 hours with a plan.
          </p>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    className="text-base py-5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="text-base py-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">Project description (optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe what you're looking to build or automate..."
                    rows={4}
                    className="text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-md">
                  Get Started
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-6">Or book a call directly</h3>
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm">
            <CalBooking />
          </div>
        </div>
      </div>
    </section>
  );
}
