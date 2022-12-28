import React, { useEffect } from 'react';
import Layout from '../components/main/Layout';
import store, { storeType } from '../redux/configureStore';
import { getToursByUser } from '../redux/actions/tour';
import { useSelector } from 'react-redux';

const dashboard = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const getToursByUser = useSelector(
    (store: storeType) => store.tourData.tours
  );
  const userId = currentUser?.user?.token;
  console.log(userId, getToursByUser);

  // useEffect(()=> {
  //   if(userId){
  //     store.dispatch(getToursByUser(userId))
  //   }
  // },[userId])

  return <h2>hghg</h2>;
};

export default dashboard;
