import React from 'react';

class Pagination extends React.Component {

	onClick = (e,page) => {
		e.preventDefault();
		if (this.props.onChange && typeof page === 'number')
			this.props.onChange(page);
	}

	prev = e => {
		e.preventDefault();
		this.props.onChange(this.props.active - 1);
	}

	next = e => {
		e.preventDefault();
		this.props.onChange(this.props.active + 1);
	}

	getPages() {
		var current = this.props.active,
	        last = this.props.pages,
	        delta = 1,
	        left = current - delta,
	        right = current + delta + 1,
	        range = [],
	        rangeWithDots = [],
	        l;

	    for (let i = 1; i <= last; i++) {
	        if (i === 1 || i === last || (i >= left && i < right)) {
	            range.push(i);
	        }
	    }

	    for (let i of range) {
	        if (l) {
	            if (i - l === 2) {
	                rangeWithDots.push(l + 1);
	            } else if (i - l !== 1) {
	                rangeWithDots.push('...');
	            }
	        }
	        rangeWithDots.push(i);
	        l = i;
	    }

		let pages = [];
		for (let i = 0; i < rangeWithDots.length; i++) {
			pages.push(<li key={ i } className={ `page-item ${ this.props.active === rangeWithDots[i] ? 'active' : '' }` }>
		    	<a 
			    	className="page-link"
			    	href="#"
			    	onClick={ e => this.onClick(e,rangeWithDots[i]) }>
		    		{ rangeWithDots[i] }
		    	</a>
		    </li>)
		}
		return pages;
	}

	render() {
		if (this.props.pages > 1) {
			return (
				<ul className="pagination-sm pagination justify-content-center p-1">
				    <li className={ `page-item ${ this.props.active === 1 ? 'disabled' : '' }` }>
				    	<a className="page-link" href="#" onClick={ this.prev }>«</a>
				    </li>
				    { this.getPages() }
				    <li className={ `page-item ${ this.props.active === this.props.pages ? 'disabled' : '' }` }>
				    	<a className="page-link" href="#" onClick={ this.next }>»</a>
				    </li>
				</ul>
			)
		}
		else {
			return null;
		}
	}
}

export default Pagination;