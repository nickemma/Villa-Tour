import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/main/Layout';
import store, { storeType } from '../../redux/configureStore';
import { getTour } from '../../redux/actions/tour';
import { useSelector } from 'react-redux';

const singleTour: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return(
      <Layout>
        <h1>Tour for ID: {id}</h1>
      </Layout>
  )
};

export default singleTour;
