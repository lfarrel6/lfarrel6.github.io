import styled from 'styled-components';
import React from 'react';

export const Eye = styled.p`
	width: 50px;
	height: 80px;
	background: ${({ theme }) => theme.dark};
	border-radius: 100px/160px;
	-webkit-border-radius: 100px 160px;
	-moz-border-radius: 100px/160px;
	position: absolute;
	top: 40px;
	box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
	-webkit-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
	-moz-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
`;

export const LeftEye = styled(Eye)`
	left: 75px;
`;

export const RightEye = styled(Eye)`
	right: 75px;
`;

export const SmileyEyes = (
	<>
		<LeftEye />
		<RightEye />
	</>
);

export const SmileBase = styled.div`
	width: 200px;
	height: 70px;
	border: 10px solid ${({ theme }) => theme.dark};
	border-top: 0;
	background: rgba(0, 0, 0, 0);
	-moz-border-radius: 0 0 120px 120px / 0 0 90px 90px;
	-webkit-border-radius: 0 0 120px 120px 0 0 90px 90px;
	border-radius: 0 0 120px 120px / 0 0 90px 90px;
	position: absolute;
	bottom: 50px;
	left: 38px;
	box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
	-webkit-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
	-moz-box-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
`;

export const SmileCorner = styled.div`
	width: 10px;
	height: 30px;
	background: ${({ theme }) => theme.dark};
	border-radius: 100px/160px;
	-webkit-border-radius: 100px 160px;
	-moz-border-radius: 100px/160px;
	position: absolute;
	top: -12px;
	-webkit-transform: rotate(65deg);
	-moz-transform: rotate(65deg);
	left: -12px;
`;

export const SmileCornerRight = styled(SmileCorner)`
	left: 180px;
	-webkit-transform: rotate(-65deg);
	-moz-transform: rotate(-65deg);
	transform: rotate(-65deg);
`;

export const Smile = (
	<SmileBase>
		<SmileCorner />
		<SmileCornerRight />
	</SmileBase>
);

export const SmileyFace = styled.div`
	width: 300px;
	height: 300px;
	position: relative;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	display: block;
	animation: spin 3s linear infinite;
`;

export const Smiley = (
	<SmileyFace>
		{SmileyEyes}
		{Smile}
	</SmileyFace>
);
