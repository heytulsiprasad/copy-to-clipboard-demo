import React, { Component, createRef } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			copyMsg: "Copy to Clipboard",
			isCopied: false,
		};
		this.inputRef = createRef();
	}

	inputHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		alert(`Welcome ${this.state.name} 🎉`);
	};

	copyToClipboard = (e) => {
		this.inputRef.current.select();
		document.execCommand("copy");
		e.target.focus();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<label htmlFor="name">What's your name?</label>
					<input
						id="name"
						name="name"
						type="text"
						ref={this.inputRef}
						value={this.state.name}
						onChange={this.inputHandler}
					/>
					<button type="button" onClick={this.copyToClipboard}>
						Copy To Clipboard
					</button>
					<button type="submit">Shout Out</button>
				</form>
				<form>
					<label htmlFor="paster">You can try pasting here!!!</label>
					<input
						type="text"
						name="paster"
						value={this.state.paster}
						onChange={this.inputHandler}
					/>
				</form>
			</div>
		);
	}
}

export default Input;
