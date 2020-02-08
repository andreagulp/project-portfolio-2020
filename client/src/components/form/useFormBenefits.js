import React, { useState, useEffect } from "react";

function useForm(initialMarketHours) {
  const [newMarketHours, setNewMarketHours] = useState(initialMarketHours);
  const [benefitsByMkt, setBenefitsByMkt] = useState([]);
  const [totHours, setTotHours] = useState(0);
  const [editedBenefit, setEditedBenefit] = useState({});

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

  const removeBenefit = mktBenefitId => {
    const removebenefitTest = benefitsByMkt.filter(
      mkt => mkt._id !== mktBenefitId
    );
    setBenefitsByMkt(removebenefitTest);
  };

  const editBenefit = mktBenefit => {
    setEditedBenefit(mktBenefit);
  };

  const handleEditableBenefitChange = e => {
    e.preventDefault();
    setEditedBenefit({
      ...editedBenefit,
      [e.target.name]: e.target.value
    });
  };

  const updateBenefit = () => {
    const refBenefitByMkt = benefitsByMkt.filter(
      mkt => mkt._id !== editedBenefit._id
    );

    setBenefitsByMkt([...refBenefitByMkt, editedBenefit]);
  };

  useEffect(() => {
    let allMarketHours = benefitsByMkt.reduce((a, b) => {
      return parseInt(a) + parseInt(b.hours);
    }, 0);
    setTotHours(allMarketHours);
  }, [benefitsByMkt]);

  return {
    newMarketHours,
    benefitsByMkt,
    handleFieldMktHoursChange,
    addBenefit,
    removeBenefit,
    editBenefit,
    totHours,
    editedBenefit,
    handleEditableBenefitChange,
    updateBenefit
  };
}

export default useForm;
