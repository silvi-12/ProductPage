import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import beautyProducts from "../data/beautyProducts.json";

const ItemInfo = ({ info }) => {
	const [showModal, setShowModal] = useState(true);

	return (
		<Modal show={showModal} centered>
			{info.map((index) =>
				index >= 0 && index < beautyProducts.length ? (
					<Modal.Dialog key={index}>
						<Modal.Header>
							<Modal.Title>{beautyProducts[index][1]}</Modal.Title>
						</Modal.Header>

						<Modal.Body
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<img
								style={{ width: "12rem" }}
								src={beautyProducts[index][0]}
								alt={beautyProducts[index][1]}
							/>
							<p>Price: &#8377;{beautyProducts[index][2]}</p>
						</Modal.Body>
					</Modal.Dialog>
				) : null
			)}
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShowModal(false)}>
					Close
				</Button>
				<Button variant="primary">Checkout</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default ItemInfo;
