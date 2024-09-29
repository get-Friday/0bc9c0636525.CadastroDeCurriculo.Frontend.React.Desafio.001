import { Container } from "@mantine/core";
import { ExperimentalFormAlert } from "../components/experimental-form-alert";
import { FormPersonalData } from "../forms/personal-data";
import { FormProfessionalExperiences } from "../forms/professional-experiences";
import { FormScholarshipDetails } from "../forms/scholarship-details";
import { ProfessionalExperiencesList } from "../forms/professional-experiences-list";
import { ScholarshipList } from "../forms/scholarship-list";
import { useContext } from "react";
import { FormContext } from "../contexts/form-context";

export const Home = () => {
	const { formStep } = useContext(FormContext);

	return (
		<Container size="lg">
			<ExperimentalFormAlert />
			{formStep === 1 ? (
				<FormPersonalData />
			) : formStep === 2 ? (
				<>
					<FormProfessionalExperiences />
					<ProfessionalExperiencesList experiences={[]} />
				</>
			) : (
				formStep === 3 && (
					<>
						<FormScholarshipDetails />
						<ScholarshipList scholarships={[]} />
					</>
				)
			)}
		</Container>
	);
};
