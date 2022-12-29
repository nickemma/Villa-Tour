import React, { useEffect } from 'react';
import Layout from '../components/main/Layout';
import store, { storeType } from '../redux/configureStore';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getToursByUser } from '../redux/actions/tour';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const tours = useSelector((store: storeType) => store.tourData.tours);
  const userId = currentUser.user?.user._id;
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.user) {
      router.replace('/login');
    }
  }, [currentUser]);

  useEffect(() => {
    if (userId) {
      store.dispatch(getToursByUser(userId));
    }
  }, [userId]);

  const excerpt = (text: string) => {
    if (text.length > 35) {
      return text.substring(0, 35) + '...';
    }
  };

  return (
    <Layout>
      <div>
        {tours.map((tour) => (
          <div key={tour._id}>
            <div>
              <img src={tour.imageFile} alt="" />
            </div>
            <div>
              <h3>{tour.title}</h3>
              <small>
                <p className="card_text">{excerpt(tour.description)} </p>
              </small>
              <div>
                <FaTrash />
                <FaEdit />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
