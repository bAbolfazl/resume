import AppDataList from "../../components/appDataList";
import Header from "../../components/header";

const Home = ({ appData }) => {
  return (
    <>
      <Header />
      <main className="my-9 mx-24">
        <AppDataList appData={appData} />
      </main>
    </>
  );
};

export default Home;
