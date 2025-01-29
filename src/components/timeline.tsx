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
    <ol>
      {items.map((item, index) => (
        <li key={index} className="mb-8 ml-5 bg-primary min-w-full rounded-lg p-3">
          <time className="mb-1 text-sm font-normal text-dark dark:text-light">
            {item.date}
          </time>
          <h3 className="text-lg font-semibold text-dark dark:text-light">
            {item.title}
          </h3>
          {item.logo && (
            <div className="mt-2">
              <Image 
                src={item.logo} 
                alt={item.title}
                width={48} 
                height={48} 
                className="object-cover rounded-full" 
              />
            </div>
          )}
          <p className="mb-4 text-base font-normal text-dark-etd dark:text-light">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;