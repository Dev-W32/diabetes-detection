import axios from "axios"

import React, { useState } from "react"
import { Button, ListGroup, ListGroupItem, Modal, ModalFooter, ModalHeader } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Confimation({ info, prevStep, setInfo, setStep }) {
	const [show, setShow] = useState(false)

	const handleClose = () => {
		setStep(1)
		setInfo({
			Pregnancies: "",
			Glucose: "",
			BloodPressure: "",
			SkinThickness: "",
			Insulin: "",
			BMI: "",
			DiabetesPedigreeFunction: "",
			Age: ""
		})
		setShow(false)
	}
	const handleShow = () => setShow(true)
	const [result, setResult] = useState()

	const handleSubmit = async (e) => {
		const config = {
			headers: {
				"Content-Type": "Application/json"
			}
		}

		const body = [info]

		try {
			const res = await axios.post(
				"http://localhost:12345/predict",
				body,
				config
			)

			setResult(res.data)
			setShow(true)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			<h2>Please review your information</h2>
			<ListGroup as="ol" numbered>
				{Object.keys(info).map((key, index) => (
					<ListGroupItem
						as="li"
						className="d-flex justify-content-between align-items-start"
					>
						<div className="ms-2 me-auto">
							<div className="fw-bold">{key}</div>
							{info[key]}
						</div>
					</ListGroupItem>
				))}
			</ListGroup>
			<div class="d-flex justify-content-between my-3">
				<Button variant="secondary" onClick={() => prevStep()}>
					Previous
				</Button>
				<Button variant="secondary" onClick={(e) => handleSubmit(e)}>
					Submit
				</Button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<ModalHeader closeButton>
					<Modal.Title>Prediction</Modal.Title>
				</ModalHeader>
				<ModalBody>
					According to the model, the patient{" "}
					{result?.prediction ? "" : "does not"}has diabetes
				</ModalBody>
				<ModalFooter>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default Confimation
