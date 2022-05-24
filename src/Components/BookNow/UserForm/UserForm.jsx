import React, { useState } from 'react';
import useTourPlan from '../../CartTourPlan/useTourPlan';
import useAuth from '../../SignUpSignInPage/UseAuthHook/useAuth';
import Confirm from '../Confirm.jsx/Confirm';
import FormPaymentDetails from '../FormPaymentDetails/FormPaymentDetails';
import FormUserDetails from '../FormUserDetails/FormUserDetails';
import Success from '../Success/Success';



const UserForm = () => {
  const { isLoggedIn } = useAuth();
  const { tour } = useTourPlan()
  const { displayPhoto, name, packageGroupPeoples, packagePresentPrice, totaldays } = tour
  // console.log(displayPhoto, name, packageGroupPeoples, packagePresentPrice, totaldays)

  const [userFrom, setUserForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    cvc: "",
    expireDate: "",
  })
  const [step, setStep] = useState(1)

  //* Process to next step
  const nextStep = () => {
    setStep(step + 1)
  }

  //* Go back to prev step
  const prevStep = () => {
    setStep(step - 1)
  }

  //* Handle fields changes
  const handleChange = (values) => {
    const { fullName, email, phone, address, city, cardName, cardNumber, cvc, expireDate } = values
    setUserForm({
      ...userFrom,
      fullName,
      email,
      phone,
      address,
      city,
      cardName,
      cardNumber,
      cvc,
      expireDate,
      logInEmail: isLoggedIn.email,
      displayPhoto,
      name,
      packageGroupPeoples,
      packagePresentPrice,
      totaldays
    })
  }

  // console.log(userFrom);


  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userFrom}
        />
      )

    case 2:
      return (
        <FormPaymentDetails
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
          values={userFrom}
        />
      )

    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={userFrom}
        />
      )

    case 4:
      return (
        <Success />
      )

    default:
      return ""
  }
};

export default UserForm;