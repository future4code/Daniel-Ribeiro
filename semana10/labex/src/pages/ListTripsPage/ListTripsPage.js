import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";

const ListTripsPage = () => {
  useProtectedPage()

  return (
    <div>
      <h1>List trip page</h1>
      <div>
        {/* <button onClick={() => goToPage(history, '/')}>Home</button> */}
      </div>
    </div>
  )
};

export default ListTripsPage;
