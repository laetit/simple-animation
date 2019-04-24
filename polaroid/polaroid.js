import React, { Component } from 'react';

import './polaroid.scss';

export default class polaroid extends Component {
	constructor(){
		super();
		this.state = { className: '' }
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.polaroid){
			this.setState({className: 'polaroid', polaroid: false})
			return
		}
		this.setState({className: ''})
	}

	render() {
		return (
			<div style={this.props.style}>
				<img className={"polaroid"} src={this.props.picture} style={this.props.imageStyle}/>
			</div>
		)
	}
}