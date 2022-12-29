import React, { useEffect } from 'react';
import Layout from '../components/main/Layout';
import store, { storeType } from '../redux/configureStore';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getToursByUser } from '../redux/actions/tour';

const dashboard = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const tours = useSelector((store: storeType) => store.tourData.tours);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.user) {
      router.replace('/login');
    }
  }, [currentUser]);

  // useEffect(()=> {
  //   if(userId){
  //     store.dispatch(getToursByUser(userId))
  //   }
  // },[userId])

  return (
    <Layout>
      <h2>hghg</h2>
    </Layout>
  );
};

export default dashboard;
