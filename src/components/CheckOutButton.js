import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ItemInfo from "../components/itemInfo";

export default function CheckOutButton({ pdtInfo }) {
	const uniqueArray = pdtInfo.filter((value, index, self) => {
		return self.indexOf(value) === index;
	});

	const [showComponent, setShowComponent] = useState(false);

	const handleClick = () => {
		setShowComponent(true);
	};

	return (
		<div>
			<Button
				variant="success"
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					display: "flex",
					justifyContent: "center",
				}}
				onClick={handleClick}>
				<FontAwesomeIcon
					icon={faCartShopping}
					style={{ padding: "0.3rem 0.5rem 0.3rem 0.3rem" }}
				/>
				Check Out
			</Button>
			{showComponent && <ItemInfo info={uniqueArray} />}
		</div>
	);
}
