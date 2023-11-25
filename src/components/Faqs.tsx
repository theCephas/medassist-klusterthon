import React, { ReactNode } from "react";
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

interface FAQItem {
  title: string;
  text: string;
}

const faqs: FAQItem[] = [
  {
    title: "What is MedAssist, and how can it help me manage my medications?",
    text: "MedAssist is a comprehensive solution designed to simplify medication management. It allows you to effortlessly add, edit, and remove medications, set reminders, and personalize instructions for a seamless experience in managing your health.",
  },
  {
    title:
      "How does the adherence tracking system work, and why is it beneficial?",
    text: "Our intuitive adherence tracking system helps you stay on top of your health journey. It visualizes your progress, making it easier to celebrate your achievements and ensures you never miss a dose.",
  },
  {
    title: "How reliable are the medication reminders, and how do they work?",
    text: "MedAssist provides timely reminders for your medications through smart notifications, ensuring you never miss a dose. These reminders are customizable, allowing you to stay on track with your medication routine effortlessly.",
  },
  {
    title: "Can I manage medications for my family members on MedAssist?",
    text: "Yes, MedAssist simplifies family healthcare by allowing you to add your loved ones to your profile, manage their medications, and receive updates. It ensures coordinated care for the entire family.",
  },
  {
    title:
      "How does the direct communication feature with healthcare providers benefit me?",
    text: "MedAssist enables secure communication with your healthcare provider within the app. This feature allows you to get guidance, ask questions, and stay informed about your health, fostering a direct and convenient connection with your healthcare team.",
  },
];

interface AccordionItemProps {
  title: string;
  num: number;
  curOpen: number | null;
  onOpen: (num: number | null) => void;
  children: ReactNode; // Update here
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  num,
  curOpen,
  onOpen,
  children,
}) => {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`border-b border-[#DFDFDF] cursor-pointer last:border-none  ${
        isOpen ? "pb-0" : "pb-5"
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between items-start gap-2">
        <h3 className="title font-inter text-base font-semibold text-primary">
          {title}
        </h3>
        <span className="icon">
          {isOpen ? (
            <GoChevronDown className="w-6 h-6" />
          ) : (
            <GoChevronRight className="w-6 h-6" />
          )}
        </span>
      </div>

      {isOpen && (
        <div className="pt-4 pb-8 leading-6 text-[#7C7C7C] duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  data: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [curOpen, setCurOpen] = React.useState<number | null>(null);

  return (
    <div className="accordion w-700 mx-auto flex flex-col gap-4">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
};

const Faqs: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container xl:max-w-[1140px] mx-auto px-4">
        <h1 className="text-primary text-2xl text-center sm:text-3xl md:text-4xl">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="mt-8">
          <Accordion data={faqs} />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
