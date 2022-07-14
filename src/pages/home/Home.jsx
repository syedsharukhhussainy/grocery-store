import React from "react";
import { Header, MainContainer } from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-16 md:mt-20 md:px-20 px-8 w-full py-4">
        <MainContainer />
      </main>
    </>
  );
};

export default Home;
