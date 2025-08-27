import React from "react";

import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Page404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header>
        <img alt="ByteBooks Logo" src="./logo.png" height={70} />
      </Header>
      <div className="flex-1 flex flex-col items-center justify-center mt-4">
        <h2 className="text-center text-[#002f52] text-[32px]">Oops! Não encontramos nada por aqui...</h2>
        <img
          src="/not_found.png"
          alt="Sem resultado"
          className="w-1/2 max-w-[500px] mx-auto mt-4"
        />
        <button
          className="py-3 w-1/4 bg-[#EB9B00] hover:opacity-80 rounded-md shadow-md"
          onClick={() => navigate("/")}
        >
          <h3 className="text-white text-lg font-medium">Voltar ao Inicio</h3>
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Page404;
