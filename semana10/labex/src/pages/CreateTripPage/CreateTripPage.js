import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";

const CreateTripPage = () => {
  useProtectedPage()
  
  return (
    <div>
      <h1>Create trip page</h1>
      <div>
        {/* <button onClick={() => goToPage(history, '/')}>Home</button> */}
      </div>
    </div>
  )
};

export default CreateTripPage;
