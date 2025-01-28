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
    <ol className="relative">
      <div className="absolute left-1.5 top-14 w-0.5 h-[calc(100%-9rem)] bg-dark dark:bg-light"></div>
      {items.map((item, index) => (
        <li key={index} className="mb-8 ml-5 bg-primary min-w-full rounded-lg p-3">
          <div 
            className="absolute w-3.5 h-3.5 bg-primary rounded-full mt-10 left-0 z-10" 
            id='bullet'
          ></div>
          <div className="absolute w-3.5 h-0.5 bg-dark dark:bg-light left-1.5 mt-11 translate-y-0.5"></div>
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