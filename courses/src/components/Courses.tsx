import React, { useState } from "react";

const coursesData = [
	{
		id: 1,
		title: "Web Development Bootcamp",
		category: "Web Development",
		instructor: "John Doe",
		price: 49.99,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 2,
		title: "React Native Essentials",
		category: "Mobile App Development",
		instructor: "Jane Smith",
		price: 39.99,
		image: "https://via.placeholder.com/150",
	},
	{
		id: 3,
		title: "Introduction to Ethereum",
		category: "Web3",
		instructor: "Alice Johnson",
		price: 59.99,
		image: "https://via.placeholder.com/150",
	},
	// Add more courses for different categories
];

const CoursesPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	const filteredCourses = coursesData.filter((course) => {
		return (
			course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(selectedCategory === "" || course.category === selectedCategory)
		);
	});

	return (
		<div className="container mx-auto">
			<div className="my-8 flex justify-between items-center">
				<input
					type="text"
					placeholder="Search courses..."
					className="border border-gray-300 rounded-lg p-2 w-1/2"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
					className="border border-gray-300 rounded-lg p-2 ml-4">
					<option value="">All Categories</option>
					<option value="Web Development">Web Development</option>
					<option value="Mobile App Development">Mobile App Development</option>
					<option value="Web3">Web3</option>
					{/* Add more categories here */}
				</select>
				<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ml-4">
					Search
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{filteredCourses.map((course) => (
					<div
						key={course.id}
						className="border border-gray-300 p-4 rounded-lg">
						<img
							src={course.image}
							alt={course.title}
							className="w-full h-40 object-cover mb-4 rounded-lg"
						/>
						<h2 className="text-xl font-semibold">{course.title}</h2>
						<p className="text-gray-600 text-sm">Category: {course.category}</p>
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

export default CoursesPage;
