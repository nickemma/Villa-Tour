import React, { useEffect } from "react";
import Layout from "../components/main/Layout";
import store, { storeType } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getToursByUser } from "../redux/actions/tour";
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Dashboard: React.FC = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const tours = useSelector((store: storeType) => store.tourData.userTours);
  const userId = currentUser.user?.user._id;
  const router = useRouter();

  useEffect(() => {
    if (!currentUser.user) {
      router.replace("/login");
    }
  }, [currentUser]);

  useEffect(() => {
    if (userId) {
      store.dispatch(getToursByUser(userId));
    }
  }, [userId]);

  const excerpt = (text: string) => {
    if (text.length > 35) {
      return text.substring(0, 35) + "...";
    }
    return text;
  };

  return (
    <Layout>
      <section className="user_tours">
        {tours.map((tour) => (
          <article key={tour._id} className="user_tour">
            <div className="user_tour_image">
              <img src={tour.imageFile} alt={tour.title} />
            </div>
            <div className="user_tour_content">
              <h3>{tour.title}</h3>
              <p className="card_text">{excerpt(tour.description)} </p>
            </div>
            <div className="user_tour_options">
                <button>
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
