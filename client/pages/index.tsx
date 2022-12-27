import { useEffect } from "react";
import Layout from "../components/main/Layout";
import store, { storeType } from "../redux/configureStore";
import { getTours } from "../redux/actions/tour";
import { useSelector } from "react-redux";
import Image from "next/image";

const Home: React.FC = () => {
  const tours = useSelector((store: storeType) => store.tourData.tours);

  console.log(tours);

  useEffect(() => {
    store.dispatch(getTours());
  }, []);

  return (
    <Layout>
      <h1>Welcome Home</h1>
    </Layout>
  );
};

export default Home;
