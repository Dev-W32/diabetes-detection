import React, { useState } from "react"
import { ProgressBar } from "react-bootstrap"
import Confimation from "./Confimation"
import Age from "./questions/Age"
import BloodPressure from "./questions/BloodPressure"
import BMI from "./questions/BMI"
import DiabetesPedigreeFunction from "./questions/DiabetesPedigreeFunction"
import Insulin from "./questions/Insulin"
import NumberOfPregnant from "./questions/NumberOfPregnant"
import PlasmaGlucose from "./questions/PlasmaGlucose"
import SkinThickness from "./questions/SkinThickness"
import Success from "./Result"

function DiabetePredict() {
	const [step, setStep] = useState(1)
	const [info, setInfo] = useState({
		Pregnancies: "",
		Glucose: "",
		BloodPressure: "",
		SkinThickness: "",
		Insulin: "",
		BMI: "",
		DiabetesPedigreeFunction: "",
		Age: ""
	})

	// go back to previous step
	const prevStep = () => {
		setStep(step - 1)
	}

	// proceed to the next step
	const nextStep = (e) => {
		e.preventDefault()
		setStep(step + 1)
	}

	const handleInputChange = (e) => {
		console.log(info)
		setInfo({ ...info, [e.target.name]: e.target.value })
	}

	return (
		
		<div className="w-50 mx-auto my-3">
			{step < 9 && (
				<ProgressBar
					now={(step - 1) / 0.08}
					variant="secondary"
					className="my-3"
				/>
			)}
			{step === 1 && (
				<NumberOfPregnant
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 2 && (
				<PlasmaGlucose
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 3 && (
				<BloodPressure
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 4 && (
				<SkinThickness
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 5 && (
				<Insulin
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 6 && (
				<BMI
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 7 && (
				<DiabetesPedigreeFunction
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 8 && (
				<Age
					prevStep={prevStep}
					nextStep={nextStep}
					handleInputChange={handleInputChange}
					info={info}
				/>
			)}
			{step === 9 && (
				<Confimation
					handleInputChange={handleInputChange}
					info={info}
					prevStep={prevStep}
					setInfo={setInfo}
					setStep={setStep}
				/>
			)}
		</div>
	)
}

export default DiabetePredict
