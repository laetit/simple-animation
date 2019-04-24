import React, { Component } from 'react';
import './flash.scss'

export default class flash extends Component {
	constructor() {
		super();
		this.state = {className: 'flashoff'}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.shoot){
			this.setState({className: 'flashon', shoot:false})
			return
		}
		this.setState({className: 'flashoff'})
	}

	render () {
		return (
			<div className={this.state.className}/>
		)
	}
}