import React, { useEffect, useState } from "react";
import Layout from "../components/main/Layout";
import store, { storeType } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { deleteTour, getToursByUser } from "../redux/actions/tour";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard: React.FC = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const tours = useSelector((store: storeType) => store.tourData);
  const router = useRouter();

  const [pageLoaded, setPageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser.user) {
      router.replace("/login");
    }
  }, [currentUser]);

  useEffect(() => {
    setLoading(tours.loading);
    if (pageLoaded) {
      if (tours.error) {
        toast.error(tours.error.message);
      }
      if (!tours.loading && !tours.error) {
        toast.success('Tour deleted succesfully');
      }
    };
  }, [tours])

  useEffect(() => {
    setPageLoaded(true);
    store.dispatch(getToursByUser());
  }, []);

  const excerpt = (text: string) => {
    if (text.length > 35) {
      return text.substring(0, 35) + "...";
    }
    return text;
  };

  const handleDelete = (id: string) => {
    store.dispatch(deleteTour(id));
  }

  return (
    <Layout>
      <section className="user_tours">
        {tours.userTours.map((tour) => (
          <article key={tour._id} className="user_tour">
            <div className="user_tour_image">
              <img src={tour.imageFile} alt={tour.title} />
            </div>
            <div className="user_tour_content">
              <h3>{tour.title}</h3>
              <p className="card_text">{excerpt(tour.description)} </p>
            </div>
            <div className="user_tour_options">
                <button onClick={() => {handleDelete(tour._id)}} disabled={loading}>
                  <FaTrash />
                </button>
                <button>
                  <FaEdit />
                </button>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Dashboard;
