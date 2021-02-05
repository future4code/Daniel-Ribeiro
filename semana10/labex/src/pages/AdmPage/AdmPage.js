import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";


const AdmPage = () => {

    useProtectedPage()

    return (
        <div>
            <h1>Adm page</h1>
            <div>
               
            </div>
        </div>
    )
};

export default AdmPage;
