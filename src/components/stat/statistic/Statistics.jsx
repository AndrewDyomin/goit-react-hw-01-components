import {List} from '../list/List';
import {Title} from '../title/Title';
import statData from 'components/stat/path/data.json';
import { Container } from './Statistics.styled';

export function Statistics () {
    return (
        <Container>
          <Title />
          <List stats={statData} />
        </Container>
      );
};