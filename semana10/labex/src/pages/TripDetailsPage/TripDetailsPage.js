import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";

const TripDetailsPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>Trip details page</h1>
      <div>
        {/* <button onClick={() => goToPage(history, '/')}>Home</button> */}
      </div>
    </div>
    
  )
};

export default TripDetailsPage;
