import { useReducer } from 'react';

const defaultState = {
	value: '',
	isTouched: false
};

const inputReducer = (state, action) => {
	if (action.type === 'CHANGE') {
		console.log('Changing....');
	}
	if (action.type === 'BLUR') {
		console.log('BLURING...');
	}
	if (action.type === 'RESET') {
		console.log('RESETING...');
	}
};

const useInput = () => {
	const [ input, inputDispatch ] = useReducer(inputReducer, defaultState);

	const inputChangeHandler = (e) => {
		inputDispatch({ type: 'CHANGE' });
	};

	const inputBlurHandler = () => {
		inputDispatch({ type: 'BLUR' });
	};

	const reset = () => {
		inputDispatch({ type: 'RESET' });
	};
	return { inputChangeHandler };
};

export default useInput;
