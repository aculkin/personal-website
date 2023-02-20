export const getSkillPopupMessage = (
	proficiency: number,
	typeSingluar: string,
	name: string
) => {
	switch (proficiency) {
		case 3:
			return {
				header: "Advanced",
				content: `This is a core ${typeSingluar} I've used a lot in my career. I've developed multiple projects or applications with ${name}.`,
			};
		case 2:
			return {
				header: "Intermediate",
				content: `There are some aspects of this ${typeSingluar} I haven't explored, but I've covered most of the basics of ${name}.`,
			};
		case 1:
			return {
				header: "Basic",
				content: `I've worked with ${name}, but only with the core features or a simpler use case of ${typeSingluar}.`,
			};
		default:
			return {
				header: "Familiar",
				content: `I'm familiar with ${name} and its strengths and weaknesses, but I have not worked with it, or developed a project with it yet.`,
			};
	}
};

export default getSkillPopupMessage;
