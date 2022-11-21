import React from "react"
import { Button, Card, Form } from "react-bootstrap"
function SkinThickness({ prevStep, nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<Card.Header>Skin Thickness</Card.Header>
				<Card.Body>
					<Card.Text>
						<Form>
							<Form.Group size="lg" controlId="userName">
								<Form.Label>
									Please indicate your skin fold thickness in mm
								</Form.Label>
								<Form.Control
									type="number"
									step="any"
									name="SkinThickness"
									value={info.SkinThickness}
									onChange={(e) => handleInputChange(e)}
									required
								></Form.Control>
							</Form.Group>
							<br></br>
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

export default SkinThickness
