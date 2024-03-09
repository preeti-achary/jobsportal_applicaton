import { useEffect } from 'react';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
const { isLoading, monthlyAppliations } = useSelector (
  (store) => store.allJobs
);



  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(showStats());
  },[]);
  return ( 
  <>
    <StatsContainer />
      {monthlyAppliations && <ChartsContainer />}
    </>
  )
}

export default Stats;
