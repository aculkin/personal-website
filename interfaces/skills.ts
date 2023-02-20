export interface SkillInterface {
	id: number;
	name: string;
	shortDescription: string;
	proficiency: number;
	description: string;
	link: string;
	awsKey: string;
}

type SkillType = "language" | "technology" | "framework";

export interface SkillInfoInterface {
	type: SkillType;
	skill: SkillInterface;
}

export interface SkillsInterface {
	languages: [SkillInterface];
	technologies: [SkillInterface];
	frameworks: [SkillInterface];
}
