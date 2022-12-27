import { useEffect } from 'react';
import Layout from '../components/main/Layout';
import store, { storeType } from '../redux/configureStore';
import { getTours } from '../redux/actions/tour';
import { useSelector } from 'react-redux';
import Card from '../components/cards/Card';

const Home: React.FC = () => {
  const tours = useSelector((store: storeType) => store.tourData.tours);
  useEffect(() => {
    store.dispatch(getTours());
  }, []);

  return (
    <Layout>
      <div>{tours.length === 0 && <h1>No tours found</h1>}</div>
      <section className="cards">
        {tours && tours.map((tour, index) => <Card key={index} {...tour} />)}
      </section>
    </Layout>
  );
};

export default Home;
