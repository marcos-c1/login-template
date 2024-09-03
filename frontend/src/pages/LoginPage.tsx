import Form from "../components/Form";
import Art from "../imgs/login-art.png";
import ArtMobile from "../imgs/login-art-mobile.png";
import { useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

const LoginPage = () => {
  const [isOpen, setOpenModal] = useState<boolean>(false);
  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 grid-cols-1 content-center">
      <img
        src={ArtMobile}
        alt="An oriental art"
        id="mobile"
        className="lg:hidden justify-self-center w-max block py-5"
      />

      <ModalContext.Provider value={{ isOpen, setOpenModal }}>
        <Form />
      </ModalContext.Provider>
      <img
        src={Art}
        alt="An oriental art"
        id="desktop"
        className="lg:block hidden h-screen py-5"
      />
    </div>
  );
};

export default LoginPage;
