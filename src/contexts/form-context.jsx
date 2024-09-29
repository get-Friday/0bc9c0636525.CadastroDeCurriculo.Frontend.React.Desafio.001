import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
	const [formStep, setFormStep] = useState(1);

	const nextFormStep = () => setFormStep((prev) => prev + 1);
	const prevFormStep = () => setFormStep((prev) => prev - 1);

	return (
		<FormContext.Provider value={{ formStep, nextFormStep, prevFormStep }}>
			{children}
		</FormContext.Provider>
	);
};

FormContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
