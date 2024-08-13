const aboutData = {
	title: "About Us",
	description:
		"Welcome to our online course platform! We are dedicated to providing high-quality courses in various fields to help you enhance your skills and achieve your career goals. Our mission is to make learning accessible and enjoyable for everyone. Whether you're interested in web development, mobile app development, AI, or any other field, we have courses tailored to suit your needs. Our team of experienced instructors is passionate about teaching and is committed to delivering engaging and informative content that will empower you to succeed. Thank you for choosing our platform. We look forward to helping you on your learning journey!",
};

const topStudents = [
	{ name: "John Doe", image: "https://via.placeholder.com/150" },
	{ name: "Jane Smith", image: "https://via.placeholder.com/150" },
	{ name: "Alice Johnson", image: "https://via.placeholder.com/150" },
	{ name: "Robert Brown", image: "https://via.placeholder.com/150" },
	{ name: "Emma Wilson", image: "https://via.placeholder.com/150" },
	{ name: "Michael Davis", image: "https://via.placeholder.com/150" },
	{ name: "Sarah Miller", image: "https://via.placeholder.com/150" },
	{ name: "David Garcia", image: "https://via.placeholder.com/150" },
	{ name: "Emily Taylor", image: "https://via.placeholder.com/150" },
	{ name: "Daniel Martinez", image: "https://via.placeholder.com/150" },
];

export { topStudents };

const topReviews = [
	{
		id: 1,
		author: "John Doe",
		comment: "Great platform! I've learned a lot from the courses here.",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 2,
		author: "Jane Smith",
		comment: "Excellent instructors and engaging content.",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
	// Add more reviews as needed
	{
		id: 3,
		author: "Alice Johnson",
		comment: "Fantastic experience! Highly recommend.",
		rating: 4,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 4,
		author: "Robert Brown",
		comment: "Incredible courses, very informative.",
		rating: 4,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 5,
		author: "Emma Wilson",
		comment: "Best platform for online learning!",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
	// Generate more random reviews
	{
		id: 6,
		author: "Michael Davis",
		comment: "The courses are well-structured and easy to follow.",
		rating: 4,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 7,
		author: "Sarah Miller",
		comment: "Amazing instructors who are experts in their fields.",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 8,
		author: "David Garcia",
		comment: "Highly satisfied with the quality of the content.",
		rating: 4,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 9,
		author: "Emily Taylor",
		comment: "Very impressed with the variety of courses available.",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 10,
		author: "Daniel Martinez",
		comment: "The platform has exceeded my expectations.",
		rating: 5,
		image: "https://via.placeholder.com/150",
	},
];

const AboutPage = () => {
	return (
		<div className="container mx-auto my-8 px-4">
			<h1 className="text-3xl font-bold mb-6">{aboutData.title}</h1>
			<div className="flex flex-wrap items-center mb-8">
				<div className="w-full md:w-1/2 pr-4 mb-4">
					<img
						src="https://via.placeholder.com/600x400"
						alt="About Us"
						className="rounded-lg shadow-lg"
					/>
				</div>
				<div className="w-full md:w-1/2">
					<p className="text-lg text-gray-700 leading-relaxed">
						{aboutData.description}
					</p>
				</div>
			</div>
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Top 10 Students</h2>
				<div className="flex flex-wrap items-center mb-8 overflow-x-auto">
					{topStudents.map((student, index) => (
						<div key={index} className="flex-shrink-0 flex mr-4">
							<img
								src={student.image}
								alt={student.name}
								className="w-32 h-32 object-cover rounded-full shadow-lg"
							/>
							<p className="text-center mt-2">{student.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Top 10 Reviews</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{topReviews.map((review) => (
						<div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
							<div className="flex items-center mb-4">
								<img
									src={review.image}
									alt={review.author}
									className="w-12 h-12 object-cover rounded-full mr-4"
								/>
								<div>
									<h3 className="text-lg font-semibold">{review.author}</h3>
									<p className="text-gray-600">Rating: {review.rating}</p>
								</div>
							</div>
							<p className="text-gray-700">{review.comment}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
