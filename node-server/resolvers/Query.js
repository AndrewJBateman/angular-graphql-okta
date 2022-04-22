// example resolver:
// const resolvers = {
//   Query: {
//     user(parent, args, context, info) {
//       return users.find(user => user.id === args.id);
//     }
//   }
// }

exports.Query = {
	parts: (parent, { filter }, { db }, info) => {
		let filteredParts = db.parts;
		if (filter) {
			const { criticalPart, avgRating } = filter;
			if (criticalPart) {
				filteredParts = filteredParts.filter((part) => {
					return part.criticalPart;
				});
			}

			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredParts = filteredParts.filter((part) => {
					let sumRatings = 0;
					let numReviews = 0;
					db.fieldReviews.forEach((fieldReview) => {
						if (fieldReview.partId === part.id) {
							sumRatings += fieldReview.rating;
							numReviews++;
						}
					});
					const avePartRating = sumRatings / numReviews;
					return avePartRating >= avgRating;
				});
			}
		}
		return filteredParts;
	},
	part: (parent, { id }, { db }, info) => {
		return db.parts.find((part) => part.id === id);
	},
	categories: (parent, args, { db }, info) => db.categories,
	category: (parent, { id }, { db }, info) => {
		return db.categories.find((category) => category.id === id);
	},
};