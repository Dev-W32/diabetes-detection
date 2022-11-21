import React from "react"
import { Button, Card, Form } from "react-bootstrap"
function Age({ prevStep, nextStep, handleInputChange, info }) {
	return (
		<div>
			<Card>
				<CardHeader>Age</CardHeader>
				<CardBody>
					<CardText>
						<Form>
							<FormGroup size="lg" controlId="userName">
								<FormLabel>Please indicate your age</FormLabel>
								<FormControl
									type="number"
									step="any"
									name="Age"
									value={info.Age}
									onChange={(e) => handleInputChange(e)}
									required
								></FormControl>
							</FormGroup>
						</Form>
					</CardText>

					<div class="d-flex justify-content-between">
						<Button variant="secondary" onClick={() => prevStep()}>
							Previous
						</Button>
						<Button variant="secondary" onClick={(e) => nextStep(e)}>
							Next
						</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	)
}

export default Age
