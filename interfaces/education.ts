export interface EducationInterface {
	id: number;
	schoolName: string;
	awsKey: string;
	startDate: string;
	endDate: string;
	degree?: string;
	minor?: string;
	description: string;
	schoolWebsiteUrl: string;
}

export interface EducationInfoInterface {
	school: EducationInterface;
}

export interface EducationPageInterface {
	education: [EducationInterface];
}
