// add Characters before mural

const styles = [
	// https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
	{
		title: 'Tags',
		example: 'tags.jpg',
		articleLink: '/tags',
		shortDesc: ['A tag can be defined as a stylised signature of the graffiti artist’s name.'],
		desc: [
			'The most common tools for graffiti tags include spray paint and marker pens.',
			'Tags can be found in every graffiti culture worldwide because they’re the earliest method of modern-day graffiti – with graffiti writers like Cornbread from Philadelphia being the first to do a graffiti tag in 1965.'
		]
	},
	{
		title: 'Etch',
		example: 'etch.webp',
		articleLink: '/',
		shortDesc: [
			'Etched graffiti is a style where graffiti writers use an acid solution  to burn their tags on glass permanently.'
		],
		desc: [
			'It is also one of the most expensive types of graffiti in terms of property damage, as etched marks cannot be removed with cleaners.',
			'Instead, the glass must be replaced. This adds to its appeal, as etched marks are usually not removed due to the need to replace the entire glass.'
		]
	},
	{
		title: 'Fat Cap',
		example: 'fat-cap.jpg',
		articleLink: '/',
		shortDesc: [
			'Fat cap is a name for a special nozzle invented for graffiti art. It allows a wider stream of spray to come out of the can, creating the largest lines.'
		],
		desc: [
			`The nozzle is put on a can of spray paint, and was invented in the late 1960s by graffiti artist Supercool.`,
			`It is particularly used for tags, throw-ups and fillings, which are, due to the width of lines, defined as a special stylistic group named fat cap.`
		]
	},

	{
		title: 'Calligraphy',
		example: 'calligraphy.jpg',
		articleLink: '/',
		shortDesc: [
			'Calligraphy graffiti (or calligraffiti) combines traditional calligraphy lettering with elements of graffiti culture.'
		],
		desc: [
			`This style of graffiti can be achieved using many different art supplies, such as calligraphy marker pens, calligraphy caps on spray paint and paintbrushes.`,
			`Because it’s possible to do with many different mediums, calligraphy graffiti can range from tags, straight letter pieces, full-colour pieces and murals.`
		]
	},

	{
		title: 'Throw-ups',
		example: 'throw-ups.jpg',
		articleLink: '/',
		shortDesc: [
			'Throw-ups are a style of graffiti characterised by rounded bubble letters with minimal negative space painted quickly (or ‘thrown-up’) on a surface.'
		],
		desc: [
			`The throw-up is usually the next progression from a tag. This comes as graffiti artists get more familiar with letter structures and strive for their names to be painted bigger, whilst also maintaining speed.`,
			`By avoiding negative space, sharp edges and intricate details, throw-ups are able to be painted quickly. Throw-ups contain two colours of paint – one for the fill and one for the outline.`,
			`High pressure spray paint is the medium of choice for throw-ups as the high output allows for maximum speed.`
		]
	},
	{
		title: 'Two letter throw-ups',
		example: 'two-letter-throw-up.webp',
		articleLink: '/',
		shortDesc: [
			'Two letter throw-ups share a similar style to regular throw-ups, but they instead only contain two letters of the graffiti writer’s tag. Most commonly, the first two letters.'
		],
		desc: [
			'This style of throw-up allows graffiti writers to paint their names up even faster, whilst also being able to fit into smaller spaces where a full throw-up isn’t possible.',
			'JA One from New York and Oker from London are two infamous graffiti artists who are well known for their two letter throw-ups.'
		]
	},
	{
		title: 'Simple',
		example: 'simple.jpg',
		articleLink: '/',
		shortDesc: ['Letters in simple style basically look like normal letters. '],
		desc: [
			'The composition is not complex. Hence, they are easily readable. Colors and effects matter the most in simple style graffiti.',
			''
		]
	},
	// https://www.graffiti-empire.com/how-to-draw-graffiti-bubble-letters/
	{
		title: 'Buble',
		example: 'buble.jpg',
		articleLink: '/',
		shortDesc: [
			'Graffiti in bubble-style – look like they have been blown up with air. All edges are round.'
		],
		desc: [
			'The rounding of letters in classical throw-ups was the initial phase that led to the development of bubble style.',
			'The letters are round, circular and often overlapping partially one another, creating an image that seems to expand and bubble-up in a way.'
		]
	},

	{
		title: 'Semi-wildstyle',
		example: 'semi-wildstyle.jpg',
		articleLink: '/',
		shortDesc: ['Semi-wildstyle graffiti are more complex than simple style. '],
		desc: [
			`Letters are arranged in a more elaborate way and style elements are added.`,
			'This style is for beginners - it is characteristic of artists who are learning the basics and are ready to experiment their techniques.'
		]
	},
	{
		title: 'Wildstyle',
		example: 'wildstyle.jpg',
		articleLink: '/',
		shortDesc: [
			'The letters of wild style graffiti are very abstract and cannot be identified as letters easily.'
		],
		desc: [
			'Wildstyle is an intricate graffiti style that’s all about interlocked letters, symbols, and dynamic shapes. Lots of style elements, like arrows and big serifs are added to the letters and make the composition very complex. The shadows of the letters fill the spaces between the letters and make the whole piece look compact.',
			'This style isn’t for beginners—it’s the signature of artists who’ve mastered the basics and are ready to showcase their advanced techniques.'
		]
	},
	{
		title: 'Sharp',
		example: 'sharp.jpg',
		articleLink: '/',
		shortDesc: [
			'In Sharp style the letters or abstract elements are sprayed or painted in as sharp and angular forms as possible.'
		],
		desc: [
			'Although in other styles sharp forms may be present, this style pushes them to their limits.',
			'Thinning, stretching and contorting of letters is extreme, which often renders these works to appear violent, aggressive and forceful.'
		]
	},
	{
		title: '3D',
		example: '3d.webp',
		articleLink: '/',
		shortDesc: [
			'Graffiti pieces with very three-dimensional compositions are called 3D-style graffiti.'
		],
		desc: [
			'As a result, the letters (can) have different vanishing points and optical illusions.',
			''
		]
	},

	{
		title: 'Characters',
		example: 'character.JPG',
		articleLink: '/',
		shortDesc: ['„Character“ is an abbreviation of “cartoon character”.'],
		desc: [
			`They are usually painted next to a graffiti to create a scenario around the graffiti piece. Even so, some artists decide to just focus on characters.`,
			`Copying characters (from cartoons) is usually accepted, because they are only used as decorative elements. If the graffiti artist decides to focus on characters only, it is needed to bring in his/her own creativity though.`
		]
	},
	{
		title: 'Hollows',
		example: 'hollows.jpg',
		articleLink: '/',
		shortDesc: [
			'Hollows are similar to throw-ups, except they only feature the letter outline in one colour with no fill-in.'
		],
		desc: [
			'Hollow graffiti is notoriously hard, however, as it can be obvious when lines have been done poorly. With only one colour and no fill-in to hide any errors, it’s difficult to fix mistakes.',
			'Because of their difficulty, hollows can be a good display of a graffiti artist’s skill as they require exceptional can control for them to look clean.'
		]
	},
	{
		title: 'Pichacao',
		example: 'pichação.jpg',
		articleLink: '/',
		shortDesc: [
			'Pichação (pronounced pi-cha-ção) is a unique style of graffiti native to São Paulo.'
		],
		desc: [
			`Roughly translated to “wall writings”, Pichação is a form of tagging it’s known for its cryptic lettering painted in hard to reach places across cities in Brazil.`,
			`Although Pichação writing began in the 1970s as a form of political and social protest, modern Pichação writers instead use it as a way to promote their graffiti name – much like traditional name-based graffiti.`,
			`Pichação can be easily recognised by its thin and aggressive lettering made possible by the use of spray paint, paintbrushes and paint rollers.`
		]
	},
	{
		title: 'Straight Letters',
		example: 'straight-letter.webp',
		articleLink: '/',
		shortDesc: [
			'A straight letter piece is defined by its big, bold and often more readable letters in combination with the graffiti artist’s personal flare.'
		],
		desc: [
			`This style of graffiti is commonly the next progression from a throw-up as it contains more detailed, sharper edges and has more negative space.`,
			`A straight letter is usually painted with speed in mind and uses only 2 – 4 colours in a piece.`,
			`In London graffiti culture, a straight letter piece painted with silver chrome and black is commonly known as a ‘Dub’.`
		]
	},
	{
		title: 'Blockbuster',
		example: 'blockbuster.jpg',
		articleLink: '/',
		shortDesc: [
			'A blockbuster is a style of graffiti characterised by huge straight letters painted using only 2 – 3 colours.'
		],
		desc: [
			`Both spray paint and/or emulsion paint can be used to create blockbuster pieces.`,
			`Although a blockbuster can be painted anywhere, they’re commonly found on large surfaces that are distanced from public view.`,
			`This means that there is a need to go huge in order to be seen, as a normal-sized piece may be missed. Common spots include highways, rooftops and abandoned buildings – but you can find blockbusters anywhere.`
		]
	},
	{
		title: 'Roller',
		example: 'roller.jpg',
		articleLink: '/',
		shortDesc: [
			'Roller graffiti (also known as roll-ups) is a style that uses emulsion paint along with paint rollers to produce big pieces in hard-to-reach places.'
		],
		desc: [
			`A big limitation of spray paint is that unless you have access to a ladder, you’re only able to paint as high as you can reach.`,
			`But by using an extended paint roller instead, graffiti artists can access spaces previously inaccessible with spray paint without needing a ladder.`,
			`Graffiti with a roller is much cheaper than spray paint.`
		]
	},

	{
		title: 'Heaven spot',
		example: 'heaven-spot.webp',
		articleLink: '/',
		shortDesc: [
			'Although not strictly a graffiti style, a heaven spot is a piece painted in a high-up and difficult place.'
		],
		desc: [
			`As the name suggests, heaven relates to being high up in the sky. But it’s also the place a writer might end up if they fall. Heaven spots can range from rooftops, towers, highway signs and more. Pretty much any graffiti piece which is high up in the air.`,
			`Both spray paint and emulsion paint are common tools for painting heaven spots.`
		]
	},

	{
		title: 'Murals',
		example: 'mural.webp',
		articleLink: '/',
		shortDesc: [
			'Murals are large pieces of street art containing faces, characters, objects, abstract designs and sometimes letters often painted with permission.'
		],
		desc: [
			`The line between graffiti and street art becomes blurred with murals, as the previous graffiti styles we’ve covered have been primarily name-based.`,
			` Murals do not always contain a name or a tag, which puts them more in the category of street art.`,
			`As murals are usually commissioned, artists are able to spend as much time as they need to perfect their work, which is often not the case for other graffiti styles.`
		]
	},

	// https://www.graffiti-empire.com/graffiti-tags-and-handstyles/
	{
		title: 'Handstyle',
		example: 'handstyle.jpg',
		articleLink: '/',
		shortDesc: [
			'Handstyle graffiti has become more popular within the design and fine art contexts, now becoming canonical as a stylistic quality of hand-lettering artworks.'
		],
		desc: [
			'Handstyle graffiti is a form of graffiti that is drawn on canvas, paper, and other two-dimensional surfaces. ',
			'This is a style of graffiti that generally describes artworks on a smaller scale, and is often seen to be incorporated into other artworks. It can be used not only as an art form. Graffiti-style texts have become a canonical form of writing that can be used for marketing, advertising and other creative purposes.'
		]
	},
	{
		title: 'Sticker bombing',
		example: 'sticker-bobing.jpg',
		articleLink: '/',
		shortDesc: [
			'Sticker bombing is a common type of graffiti where artists either write on blank stickers or print names and images on stickers and stick them up in public.'
		],
		desc: [
			`Sticker bombing is unique as it’s not just used as a means of increasing someone’s profile through a tag like traditional graffiti.`,
			`Stickers are also often used to raise awareness of social issues and to promote political agendas.`
		]
	},

	// https://twistedsifter.com/2014/07/the-ultimate-banksy-gallery/
	{
		title: 'Stencils',
		example: 'stencils.webp',
		articleLink: '/',
		shortDesc: [
			'Artists then put the sheet plastic or metal with shapes cut out of it - on a surface and use spray paint to fill in the cut-out shapes, producing their artwork.'
		],
		desc: [
			'Stencil graffiti or stencil art is a style that uses a sheet of card, plastic or metal with shapes cut out of it.',
			`Stencil graffiti was made famous by "Banksy" through his popular pieces Girl with Balloon and Flower Thrower.`,
			`Since then, stencil graffiti has become more popular and often inherits a political or social message which is aimed at the wider public.`
		]
	},
	{
		title: 'Wheat paste',
		example: 'wheat-paste.webp',
		articleLink: '/',
		shortDesc: [
			'Wheat paste is a style that uses wheat flour or starch mixed with water to adhere paper imagery to a surface.'
		],
		desc: [
			'Like stencils, stickers and murals – wheat paste falls more into the category of street art than traditional graffiti. This is because it focuses on images and symbols instead of a graffiti name.',
			'Wheat paste posters also often try to provoke a social or political message as they’re commonly used by activist groups to raise awareness for their cause.'
		]
	},
	{
		title: 'Brush',
		example: 'brush.jpg',
		articleLink: '/',
		shortDesc: [
			'Relatively quick to execute once the initial design is settled, brush style stands for the use of brush or paint rollers which creates a smooth final effect.'
		],
		desc: [
			`Brush graffiti are devoid of unnecessary lines and petty details, but sometimes, brushes may be used for the execution of fine points, which creates a more painterly result.`
		]
	},

	{
		title: 'Anti-style',
		example: 'anti-style.webp',
		articleLink: '/',
		shortDesc: [
			'Anti-style (also known as hipster graffiti and ignorant style) is a type of graffiti that completely ignores traditional graffiti conventions.'
		],
		desc: [
			'By ignoring these conventions, anti-style writers are strictly “against” any graffiti traditional style. This is because many artists strive for respect and recognition, which is hard to achieve as an anti-style writer because this style only appeals to a small minority of graffiti artists.',
			'Anti-style can be hard to look at as pieces lack composition and flow. With no rules to follow, anti-style can be produced using any type of graffiti paint.'
		]
	}
];

// Murals

export default styles;
