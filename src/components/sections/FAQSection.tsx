import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
// @ts-expect-error - paraglide messages import
import * as m from "@/paraglide/messages";

export function FAQSection() {
  const faqs = [
    { id: "faq1", question: m.faq1Q(), answer: m.faq1A() },
    { id: "faq2", question: m.faq2Q(), answer: m.faq2A() },
    { id: "faq3", question: m.faq3Q(), answer: m.faq3A() },
    { id: "faq4", question: m.faq4Q(), answer: m.faq4A() },
  ];

  return (
    <section className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {m.faqHeader()}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {m.faqSubheader()}
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
