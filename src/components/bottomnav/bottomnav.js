import React from 'react';
import { StickyBottomNav, BottomNavOption } from './bottomnav.styled';

function BottomNav() {
	return (
		<StickyBottomNav>
			<BottomNavOption>
				<span role='img' aria-labelledby='about'>
					&#x1F47D;
				</span>
				<h6>about</h6>
			</BottomNavOption>
			<BottomNavOption>
				<span role='img' aria-labelledby='work'>
					&#x1F4BB;
				</span>
				<h6>work</h6>
			</BottomNavOption>
			<BottomNavOption>
				<span role='img' aria-labelledby='blog'>
					&#x1F4DD;
				</span>
				<h6>blog</h6>
			</BottomNavOption>
		</StickyBottomNav>
	);
}

export default BottomNav;
