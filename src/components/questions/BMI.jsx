import React from "react"
import { Button, Card, Form } from "react-bootstrap"
function BMI({ prevStep, nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<Card.Header>BMI </Card.Header>
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group size="lg" controlId="userName">
								<Form.Label>
									Please indicate your body mass index measured as weight in
									kg/(height in m)^2
								</Form.Label>
								<Form.Control
									type="number"
									step="any"
									name="BMI"
									value={info.BMI}
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

export default BMI
