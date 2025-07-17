// types.ts

export interface Boardgame {
	logo: string;
	id: string;
	pricing: {
		box: string;
		subscription: string;
	};
	github: string;
	icon: string;
	tags: string[];
	type: string;
	age: string;
	features: Array<{
		title: string;
		desc: string;
	}>;
	amountPlayers: {
		min: number;
		max: number;
	};
	durationGame: {
		min: number;
		max: number;
	};
	durationWorkshop: {
		min: number;
		max: number;
	};
	title: string;
	shortDesc: string;
	desc: string[];
	linkLanding: string;
	linkApp: string;
	promoVideo: string;
	gallery: Array<{
		caption: string;
		img: string;
	}>;
}


export interface NavigationLink {
	title: string;
	link: string; 
}