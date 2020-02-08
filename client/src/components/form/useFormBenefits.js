import React, { useState } from "react";

function useForm(initialMarketHours) {
  const [newMarketHours, setNewMarketHours] = useState(initialMarketHours);
  const [benefitsByMkt, setBenefitsByMkt] = useState([]);

  const handleFieldMktHoursChange = e => {
    e.preventDefault();
    setNewMarketHours({
      ...newMarketHours,
      [e.target.name]: e.target.value
    });
  };

  const addBenefit = mktBenefit => {
    setBenefitsByMkt([...benefitsByMkt, mktBenefit]);
    setNewMarketHours(initialMarketHours);
  };

  return {
    newMarketHours,
    benefitsByMkt,
    handleFieldMktHoursChange,
    addBenefit
  };
}

export default useForm;
