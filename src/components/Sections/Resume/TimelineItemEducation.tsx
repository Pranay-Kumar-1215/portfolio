import {FC, memo} from 'react';

import {TimelineItemEduction as TLIE} from '../../../data/dataDef';

const TimelineItemEduction: FC<{item: TLIE}> = memo(({item}) => {
  const {title, date, location} = item;
  return (
    <div className="flex flex-col text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
    </div>
  );
});

TimelineItemEduction.displayName = 'TimelineItem';
export default TimelineItemEduction;
