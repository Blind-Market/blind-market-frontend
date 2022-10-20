import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function ImageModal({ show, onClose, children, title }: any) {
	const [isBrowser, setIsBrowser] = useState(false);
	const [closeButtonEffect, setCloseButtonEffect] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<StyledModalHeader></StyledModalHeader>
				<StyledModalBody>
					{children}
					<button
						onClick={handleCloseClick}
						className={`${
							closeButtonEffect && "animate-wiggle"
						} bg-red-500 text-white rounded hover:bg-red-700 hover:shadow-xl lg:inline-flex lg:w-auto px-3 py-2 font-bold uppercase my-2`}
					>
						close
					</button>
				</StyledModalBody>
			</StyledModal>
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			<div>{modalContent}</div>,
			document.getElementById("modal-root")!
		);
	} else {
		return null;
	}
}

const StyledModalBody = styled.div`
	padding-top: 10px;
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 25px;
`;

const StyledModal = styled.div`
	background: white;
	max-width: 600px;
	max-height: 600px;
	min-width: 300px;
	min-height: 300px;
	border-radius: 15px;
	padding: 15px;
`;
const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export default ImageModal;
