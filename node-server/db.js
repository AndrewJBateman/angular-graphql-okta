const parts = [
	{
		id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
		name: "Flourescent Tube",
		description: "Provides light for maintenance operations at night",
		quantity: 230,
		weight: 42.5,
		image: "img-1",
		criticalPart: true,
		categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
		createdDate: "datestring"
	},
	{
		id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
		name: "Drill bit",
		description: "100mm drill bit for equipment mounting",
		quantity: 33,
		weight: 53.5,
		image: "img-2",
		criticalPart: false,
		categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
		createdDate: "datestring"
	},
	{
		id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
		name: "Drill clamp",
		description: "Holds drill bit in place on site",
		quantity: 4266,
		weight: 1.33,
		image: "img-3",
		criticalPart: true,
		categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
		createdDate: "datestring"
	},
	{
		id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
		name: "Tool belt",
		description: "Holds tools around waist when working at height",
		quantity: 753,
		weight: 332,
		image: "img-4",
		criticalPart: false,
		categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
		createdDate: "datestring"
	},
	{
		id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
		name: "Lubricating Oil",
		description: "Lubricates essential machine parts",
		quantity: 53453,
		weight: 23.11,
		image: "img-5",
		criticalPart: true,
		categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
		createdDate: "datestring"
	},
	{
		id: "f01bcdec-6783-464e-8f9e-8416830f7569",
		name: "LED Cover",
		description: "Outdoor or indoor lighting protection",
		quantity: 128,
		weight: 59.99,
		image: "img-6",
		criticalPart: true,
		categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
		createdDate: "datestring"
	},
	{
		id: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
		name: "Flashing Red Light",
		description: "Emergency lighting for warning personal to stay away",
		quantity: 3,
		weight: 427.4,
		image: "img-7",
		criticalPart: false,
		categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
		createdDate: "datestring"
	},
	{
		id: "b553085a-a7e0-4c9b-8a12-f971919c3683",
		name: "Mens Large Gloves",
		description: "Maintenance gloves to prevent accidents",
		quantity: 745,
		weight: 77.0,
		image: "img-8",
		criticalPart: true,
		categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
		createdDate: "datestring"
	},
	{
		id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
		name: "Emergency Torch",
		description: "High power backup torch for emergencies only",
		quantity: 734,
		weight: 93.44,
		image: "img-9",
		criticalPart: false,
		categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
		createdDate: "datestring"
	},
];

const categories = [
	{
		id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
		name: "Drilling",
	},
	{
		id: "34115aac-0ff5-4859-8f43-10e8db23602b",
		name: "Illumination",
	},
	{
		id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
		name: "Maintenance",
	},
];

const fieldReviews = [
	{
		id: "b22da5d4-6a4b-4db5-8ec3-acc228c36260",
		date: "2021-01-01",
		title: "Missing Accessories",
		comment: "This light needs a ceiling mounting kit",
		rating: 1,
		partId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
	},
	{
		id: "78851fe8-a657-410f-9b0a-2bc952636e16",
		date: "2021-04-23",
		title: "Easy installation",
		comment: "Great grommit set, used my own screws",
		rating: 3,
		partId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
	},
	{
		id: "463c0f40-86bc-4b8e-be47-e363111991d1",
		date: "2020-04-23",
		title: "Quality light",
		comment: "Should come with mounting kit",
		rating: 2,
		partId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
	},
	{
		id: "ebd207cd-f909-4bb1-8416-3e17a161b859",
		date: "2020-07-23",
		title: "Light Too bright",
		comment: "why is it so bright?",
		rating: 1,
		partId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
	},
	{
		id: "92450802-24ef-4907-9c70-b82697a96882",
		date: "2021-01-01",
		title: "best drill bit ever",
		comment: "super sharp, cut through anything",
		rating: 5,
		partId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
	},
	{
		id: "f7ca2f8e-74ed-4323-9166-c8b606c2238e ",
		date: "2021-04-23",
		title: "Super drill bit",
		comment: "this is amazing, only 4 stars tho... :)",
		rating: 4,
		partId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
	},
	{
		id: "908dbc7f-7782-43ae-9775-63bbd87db575",
		date: "2020-04-23",
		title: "Great Piece of Equipment",
		comment: "Works perfectly out of the box",
		rating: 5,
		partId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
	},
	{
		id: "1852460f-b186-4a7a-a024-dccc0f72e052",
		date: "2020-07-23",
		title: "Perfect Drill Bit",
		comment: "I would totally recommend",
		rating: 5,
		partId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
	},
	{
		id: "d075bdc8-df4b-4389-82ba-cb63726639ec",
		date: "2020-07-23",
		title: "Work OK but..",
		comment: "Works OK but difficult to open",
		rating: 3,
		partId: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
	},
	{
		id: "1b2b32ba-acbd-4578-9455-30eb4c8f5c40",
		date: "2020-07-23",
		title: "terrible!!!!!!",
		comment:
			"Not good at all!! used it once and got caught 2 days later. now im doing life without parole",
		rating: 1,
		partId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
	},
	{
		id: "4480710a-e2b6-4dab-a227-43cb3ffca7b8",
		date: "2020-07-23",
		title: "works great",
		comment: "Could do with an extra hole to fit fat people",
		rating: 4,
		partId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
	},
	{
		id: "57825f8c-6c13-4ddb-a90e-0c2be283972c",
		date: "2020-07-23",
		title: "Made well",
		comment: "Strong and firm but needs more tool hooks",
		rating: 4,
		partId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
	},
	{
		id: "5b83af5b-e9fa-47e5-8ac8-faa7d420f2d5",
		date: "2020-07-23",
		title: "Good for the machins",
		comment: "Missing multilingual safety warnings",
		rating: 4,
		partId: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
	},
	{
		id: "29120a7e-5c75-4b83-9a21-aa064e2abf37",
		date: "2020-07-23",
		title: "Good cover but..",
		comment: "I require more color options",
		rating: 4,
		partId: "f01bcdec-6783-464e-8f9e-8416830f7569",
	},
	{
		id: "48e297a2-4b6c-48a2-ab68-6fe6b40cb660",
		date: "2020-07-23",
		title: "Good cover",
		comment: "Works OK so far",
		rating: 5,
		partId: "f01bcdec-6783-464e-8f9e-8416830f7569",
	},
	{
		id: "74bc2895-1ee7-4b97-8f4d-d5818fc95b09",
		date: "2020-07-23",
		title: "Good cover for LED",
		comment: "Not as strong as the previous model",
		rating: 5,
		partId: "f01bcdec-6783-464e-8f9e-8416830f7569",
	},
	{
		id: "e44b08ac-7b03-488e-83d6-0a85f0f0cecc",
		date: "2020-07-23",
		title: "Good flashing light",
		comment: "Needs more flashing options",
		rating: 4,
		partId: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
	},
	{
		id: "6ee01595-c3b8-42a9-b0e0-ce3cb2beb7d6",
		date: "2020-07-23",
		title: "Best flashing light I have seen",
		comment: "No need to update anything",
		rating: 3,
		partId: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
	},
	{
		id: "4dfdbb84-67f1-48cc-8682-1456413225ad",
		date: "2020-07-23",
		title: "Good fit",
		comment: "Needs more small sizes",
		rating: 5,
		partId: "b553085a-a7e0-4c9b-8a12-f971919c3683",
	},
	{
		id: "574f1c51-2483-44a7-8476-888905e1a711",
		date: "2020-07-23",
		title: "great torch",
		comment: "better now it is waterproof",
		rating: 2,
		partId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
	},
	{
		id: "1e489691-6d19-4438-a6c5-90919eef070e",
		date: "2020-07-23",
		title: "best torch ever",
		comment: "Switch is stiff to operate",
		rating: 4,
		partId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
	},
	{
		id: "6c8bc709-f675-472e-ae84-f8c7d73e99af",
		date: "2020-07-23",
		title: "Good torch but...",
		comment: "Could be brighter",
		rating: 2,
		partId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
	},
];

exports.db = {
	parts,
	categories,
	fieldReviews,
};
