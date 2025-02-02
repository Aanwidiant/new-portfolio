import Image from 'next/image';

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    logo?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <ol className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="bg-primary min-w-full rounded-lg p-3 space-y-1 flex gap-x-4 items-center">
                    {item.logo && (
                        <div className="">
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
                        <h3 className="text-lg font-semibold">
                            {item.title}
                        </h3>
                        <time className="text-sm">
                            {item.date}
                        </time>
                        <p className="text-dark-etd dark:text-light">
                            {item.description}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;