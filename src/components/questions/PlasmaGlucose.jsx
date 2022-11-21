import React from "react"
import { Button, Card, Form } from "react-bootstrap"

function PlasmaGlucose({ prevStep, nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<Card.Header>Glucose Tolerance </Card.Header>
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group size="lg" controlId="userName">
								<Form.Label>
									Please indicate your plasma glucose concentration after 2
									hours in an oral glucose tolerance test
								</Form.Label>
								<Form.Control
									type="number"
									step="any"
									name="Glucose"
									value={info.Glucose}
									onChange={(e) => handleInputChange(e)}
									required
								></Form.Control>
							</Form.Group>
						</Form>
					</Card.Text>

					<div class="d-flex justify-content-between">
						<Button variant="secondary" onClick={() => prevStep()}>
							Previous
						</Button>
						<Button variant="secondary" onClick={(e) => nextStep(e)}>
							Next
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default PlasmaGlucose
