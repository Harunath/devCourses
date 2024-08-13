import wdb from "../assets/images/Teachable Thumbnails.png";
import py from "../assets/images/FREE-Python-Course-For-Beginners.png";
import ml from "../assets/images/ML.jpg";

const courses = [
	{
		id: 1,
		title: "Web Development Bootcamp",
		instructor: "John Doe",
		price: 49.99,
		image: wdb,
	},
	{
		id: 2,
		title: "Python for Beginners",
		instructor: "Jane Smith",
		price: 39.99,
		image: py,
	},
	{
		id: 3,
		title: "Machine Learning Fundamentals",
		instructor: "Alice Johnson",
		price: 59.99,
		image: ml,
	},
];

const HomePage = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-bold text-center my-8">
				Welcome to our Online Course Platform
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{courses.map((course) => (
					<div
						key={course.id}
						className="border border-gray-300 p-4 rounded-lg">
						<img
							src={course.image}
							alt={course.title}
							className="w-full h-40 object-cover mb-4 rounded-lg"
						/>
						<h2 className="text-xl font-semibold">{course.title}</h2>
						<p className="text-gray-600 text-sm">
							Instructor: {course.instructor}
						</p>
						<p className="text-gray-800 font-bold mt-2">${course.price}</p>
						<button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
							Enroll Now
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
