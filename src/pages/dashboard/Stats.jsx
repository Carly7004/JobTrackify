import { useEffect } from 'react';
import { StatsContainer, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';
import Loading from '../../components/Loading';

function Stats() {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}
export default Stats;
