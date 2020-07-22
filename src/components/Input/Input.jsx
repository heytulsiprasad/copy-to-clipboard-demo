import React, { Component, createRef } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			copyMsg: "Copy to Clipboard",
			isCopied: false,
		};
		this.inputRef = createRef(); // targets the input we are gonna copy
	}

	// handles change in input element
	inputHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	////////////// APPROACH 1

	// copies using execCommand which is going to be deprecated
	copyToClipboard = (e) => {
		this.inputRef.current.select();
		document.execCommand("copy");
		e.target.focus();
		this.setState((state) => ({
			...state,
			copyMsg: "Copied!",
			isCopied: true,
		}));

		// to change the copy button text sometime after copying
		setTimeout(() => {
			this.setState((state) => ({
				...state,
				copyMsg: "Copy to Clipboard!",
				isCopied: false,
			}));
		}, 3000);
	};

	////////////// APPROACH 2

	// copies using the clipboard API (modern approach)
	newCopyToClip = (e) => {
		navigator.clipboard.writeText(this.state.name);

		this.setState((state) => ({
			...state,
			copyMsg: "Copied!",
			isCopied: true,
		}));

		// to change the copy button text sometime after copying
		setTimeout(() => {
			this.setState((state) => ({
				...state,
				copyMsg: "Copy to Clipboard!",
				isCopied: false,
			}));
		}, 3000);
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
					<button type="button" onClick={this.newCopyToClip}>
						{this.state.copyMsg}
					</button>
				</form>
			</div>
		);
	}
}

export default Input;
