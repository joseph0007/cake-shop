import React from 'react';
import { Composition } from 'atomic-layout';
import { mobileArea, tabletArea, desktopArea } from 'utils/global.grid';

const Card = ({ title, imageUrl, actions }) => (
	<Composition areas={mobileArea} areasMd={tabletArea} areasLg={desktopArea} gap={2}>
		{/* Get React components based on provided areas */}
		{({ Content, Header, Footer }) => (
			<React.Fragment>
				{/* Preserve semantics with polymorphic prop */}
				<Header as="h3">{title}</Header>
				
				<Content>
					{/* Render anything, including another Composition */}
					<img src={imageUrl} alt={title} />
				</Content>

				{/* Responsive props: just suffix with a breakpoint name */}
				<Footer padding={10} paddingMd={20}>
					{actions}
				</Footer>
			</React.Fragment>
		)}
	</Composition>
)

export default Card;

