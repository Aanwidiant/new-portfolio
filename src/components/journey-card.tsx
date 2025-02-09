import { useState } from "react";
import Image from 'next/image';
import Chevron from "@/components/icons/chevron";

interface JourneyItem {
    date: string;
    title: string;
    description?: string;
    job?: string;
    logo: string;
    jobdesk?: string[];
}

interface JourneyCardProps {
    items: JourneyItem[];
}

const JourneyCard = ({ items }: JourneyCardProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex flex-wrap gap-6 justify-center items-start">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="card-style w-full md:max-w-sm min-h-36 p-3 flex flex-col justify-center gap-3 self-start"
                    onClick={() => toggleDescription(index)}
                >
                    <div className="flex gap-x-4 items-center relative">
                        {item.logo && (
                            <div>
                                <Image
                                    src={item.logo}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                        )}
                        <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <time className="text-sm">{item.date}</time>
                            {item.description && (<p className="text-dark-etd dark:text-light">{item.description}</p>)}
                            {item.job && (<p className="text-dark-etd dark:text-light">{item.job}</p>)}
                        </div>

                        {item.jobdesk && (
                            <Chevron
                                className={`absolute w-8 h-8 hover:scale-125 bottom-0 right-0 fill-dark dark:fill-light transform ${openIndex === index ? "rotate-90" : ""
                                    }`}
                            />
                        )}
                    </div>

                    {openIndex === index && item.jobdesk && (
                        <ol className="list-disc px-5 text-sm text-dark-etd dark:text-light space-y-1">
                            {item.jobdesk.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ol>
                    )}
                </div>
            ))}
        </div>
    );
};

export default JourneyCard;
