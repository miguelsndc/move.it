import styled from 'styled-components';

interface BarProps {
  BarWidth: number;
}

interface CurrentExperienceProps {
  DistanceFromStart: number;
}

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    & > div {
      height: 4px;
      border-radius: 4px;
      background: var(--green);
    }
  }
`;

export const Bar = styled.div<BarProps>`
  width: ${(props) => `${props.BarWidth}%`};
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  left: ${(props) => `${props.DistanceFromStart}%`};
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;