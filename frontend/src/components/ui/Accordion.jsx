import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ question, answer, defaultOpen = false, isLast = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={isLast ? '' : 'border-b border-border'}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-text md:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-subtext transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-subtext">{answer}</p>
      </div>
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-2 md:p-4">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
}

export default Accordion;
