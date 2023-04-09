import {FC, memo} from 'react';

import {achievementItem} from '../../../data/dataDef';

const AchievementItem: FC<{item: achievementItem}> = memo(({item}) => {
  const {content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      {content}
    </div>
  );
});

AchievementItem.displayName = 'AchievementItem';
export default AchievementItem;
