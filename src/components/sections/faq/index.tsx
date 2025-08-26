import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Title } from "@/components/ui"
import { faqData } from "./data/faq.data";

export const FAQ = () => {
  return (
    <section className="overflow-hidden">
      <div className="min-container">
        <Title className="mb-4 md:mb-8">FAQ Jeśli masz pytanie</Title>
        <Accordion 
          type="single" 
          collapsible 
          defaultValue={faqData[0]?.id}
        >
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-gray-custom group font-[590] md:text-[32px] text-[20px] leading-none inline-flex items-center justify-baseline gap-4">
                <div className="font-bold md:text-[20px] leading-none text-[14px]">
                  {item.id}
                </div>
                <span className="group-hover:underline">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};