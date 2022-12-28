import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/main/Layout';
import store, { storeType } from '../../redux/configureStore';
import { getTour } from '../../redux/actions/tour';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { BsCalendarDate, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const singleTour: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const tour = useSelector((store: storeType) => store.tourData.tour);

  useEffect(() => {
    if (id) {
      store.dispatch(getTour(id));
    }
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <div className="image">
          <img src={tour?.imageFile} alt="awesome" />
        </div>
        <BsFillArrowLeftCircleFill />
        <div className="content">
          <h3>{tour?.title}</h3>
          <span>Created by: {tour?.creator}</span>
          <div className="tags_content">
            <span className="tags">
              {tour && tour?.tags && tour?.tags.map((item: any) => `#${item}`)}
            </span>
          </div>
          <div className="date_content">
            <BsCalendarDate />
            <small>{moment(tour?.createdAt).fromNow()}</small>
          </div>
          <div className="text_content">
            <p>{tour?.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default singleTour;
