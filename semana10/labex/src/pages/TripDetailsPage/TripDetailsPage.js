import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useProtectedPage } from "../../Hooks/useProtectPage";

const TripDetailsPage = (props) => {
  useProtectedPage()

  return (
    <div>
      <h1>Trip details page</h1>
      <div>
        {/* {tripDetails} */}
      </div>
    </div>
    
  )
};

export default TripDetailsPage;
