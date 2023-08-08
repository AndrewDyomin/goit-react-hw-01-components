import {List} from '../list/List';
import {Title} from '../title/Title';
import statData from 'components/stat/path/data.json';

export function Statistics () {
    return (
        <div>
          <Title />
          <List stats={statData} />
        </div>
      );
};