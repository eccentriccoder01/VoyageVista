import React, {useState} from "react";
import Menu from "./core/Menu.js";
import Signin from "./user/Signin.js";

const App = () => {
    const [showModal, setShowModal] = useState(false);
  
    const openSignInModal = () => {
      setShowModal(true);
    };
  
    const closeSignInModal = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        <Menu openSignInModal={openSignInModal} />
        <Signin show={showModal} handleClose={closeSignInModal} />
        {/* Rest of your app */}
      </div>
    );
  };

export default App;
