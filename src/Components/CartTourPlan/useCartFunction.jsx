import { useState } from "react";

const useCartFunction = () => {
    const [tour, setTour] = useState({})
    // console.log(tour);
    const selectTourPackage = (tourPackage) => {
        setTour(tourPackage);
    }

    const handleCartClearance = () => {
        setTour({});
    }

    return {
        selectTourPackage,
        handleCartClearance,
        tour
    }
};

export default useCartFunction;