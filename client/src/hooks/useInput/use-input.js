import { useReducer } from 'react';

const defaultState = {
	value: '',
	isRemember: false,
	isTouched: false
};

const inputReducer = (state, action) => {
	if (action.type === 'CHANGE') {
		console.log('Changing....');
		return {
			value: action.value,
			isRemember: state.isRemember,
			isTouched: state.isTouched
		};
	}
	if (action.type === 'BLUR') {
		console.log('BLURING...');
		return {
			value: state.value,
			isRemember: state.isRemember,
			isTouched: true
		};
	}
	if (action.type === 'REMEMBER') {
		return {
			value: state.value,
			isRemember: action.remebmer,
			isTouched: state.isTouched
		};
	}
	if (action.type === 'RESET') {
		console.log('RESETING...');
		return defaultState;
	}
};

const useInput = () => {
	const [ inputState, inputDispatch ] = useReducer(inputReducer, defaultState);

	const inputChangeHandler = (e) => {
		inputDispatch({ type: 'CHANGE', value: e.target.value });
	};

	const inputRememberHandler = (e) => {
		console.log(e.target.value);
		inputDispatch({ type: 'REMEMBER', remebmer: e.target.checkbox });
	};

	const inputBlurHandler = () => {
		inputDispatch({ type: 'BLUR' });
	};

	const reset = () => {
		inputDispatch({ type: 'RESET' });
	};

	return {
		value: inputState.value,
		inputChangeHandler,
		inputBlurHandler,
		rememberHandler: inputRememberHandler,
		isRemember: inputState.isRemember,
		reset
	};
};

export default useInput;
