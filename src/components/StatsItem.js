import Wrapper from '../assets/wrappers/StatItem';

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <hearder>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </hearder>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};
export default StatsItem;
