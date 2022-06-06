import React from 'react';

const Title = props => (
	<h2 className="title-component">
		{ props.name }
		{ props.right && <div className="title-component-right">
			{ props.right }
		</div> }
	</h2>
)

export default Title;