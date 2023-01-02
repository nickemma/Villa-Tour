import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/main/Layout';
import store, { storeType } from '../../redux/configureStore';
import { getTour } from '../../redux/actions/tour';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Link from 'next/link';

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
        <div className="container_inner">
          <div className="image">
            <img src={tour?.imageFile} alt="awesome" />
          </div>
          <div className="content">
            <h3>{tour?.title}</h3>
            <Link href="/" className="go_back">
              <BsFillArrowLeftCircleFill />
            </Link>
            <span>
              Created by {tour?.creatorName}{' '} {moment(tour?.createdAt).fromNow()}
            </span>
            <div className="tags_content">
              <ul className="tags">
                {tour?.tags.map((item: any) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text_content">
              <p>{tour?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default singleTour;
