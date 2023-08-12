import { Container, StatsList, StatsItem, StatsTopic, StatsValue, UpperArea, CardTitle } from './Statistics.styled';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function Statistics ({ title, stats }) {
    return (
        <Container>
          <UpperArea>
            <CardTitle>{title}</CardTitle>
          </UpperArea>
          <StatsList>
            {stats.map(item => (
                <StatsItem key={item.id} color={getRandomColor()}>
                    <StatsTopic>{item.label}</StatsTopic>
                    <StatsValue>{item.percentage}%</StatsValue>
                </StatsItem>
            ))}
          </StatsList>
        </Container>
      );
};