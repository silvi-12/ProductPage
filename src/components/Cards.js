import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import beautyProducts from "../data/beautyProducts.json";
import CheckOutButton from "./CheckOutButton";

export const Cards = () => {
	const [cartCounts, setCartCounts] = useState(beautyProducts.map(() => 0));
	const [cartItem, setCartItem] = useState([]);

	const handleAddToCart = (index) => {
		const updatedCounts = [...cartCounts];
		updatedCounts[index] += 1;
		setCartCounts(updatedCounts);

		setCartItem([...cartItem, index]);
	};

	const handleRemoveFromCart = (index) => {
		if (cartCounts[index] > 0) {
			const updatedCounts = [...cartCounts];
			updatedCounts[index] -= 1;
			setCartCounts(updatedCounts);
		}
	};

	return (
		<div className="mt-4 row" style={{ justifyContent: "space-evenly" }}>
			{beautyProducts.map((item, index) => (
				<Card key={index} style={{ width: "18rem", margin: "5rem" }}>
					<Card.Img variant="top" src={item[0]} />
					<Card.Body>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Card.Title>{item[1]}</Card.Title>
							<Card.Text>&#8377;{item[2]}</Card.Text>
						</div>
						<Card.Text>{item[3]}</Card.Text>
						<div
							className="quantity"
							style={{ display: "flex", flexDirection: "row" }}>
							<Button
								className="quantity_btn"
								onClick={() => handleRemoveFromCart(index)}
								data-bs-theme="light"
								style={{
									width: "2rem",
									height: "1.5rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#EEEDEB",
									border: "0",
									color: "black",
									margin: "0.5rem 0.5rem 0.5rem 0rem",
								}}>
								-
							</Button>
							<span style={{ margin: "0.5rem" }}>{cartCounts[index]}</span>
							<Button
								onClick={() => handleAddToCart(index)}
								variant="secondary"
								style={{
									width: "2rem",
									height: "1.5rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#EEEDEB",
									border: "0",
									color: "black",
									margin: "0.5rem",
								}}>
								+
							</Button>
						</div>
					</Card.Body>
				</Card>
			))}
			<CheckOutButton pdtInfo={cartItem} />
		</div>
	);
};
