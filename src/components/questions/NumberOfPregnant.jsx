import React from "react"
import { Button, Card, Form } from "react-bootstrap"

function NumberOfPregnant({ nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<Card.Header>Number of times pregnant</Card.Header>
				<Card.Body>
					<Card.Text>
						<Form onSubmit={(e) => nextStep(e)}>
							<Form.Group size="lg" controlId="userName">
								<Form.Label>
									Please indicate how many times you have been pregnant
								</Form.Label>
								<Form.Control
									type="number"
									step="1"
									min="0"
									name="Pregnancies"
									value={info.Pregnancies}
									onChange={(e) => handleInputChange(e)}
									required
								></Form.Control>
							</Form.Group>
							<br></br>
							<div class="d-flex flex-row-reverse">
								<Button variant="secondary" type="submit">
									Next
								</Button>
							</div>
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}

export default NumberOfPregnant
