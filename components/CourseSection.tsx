import CourseCard from "./CourseCard";

const courses = [
  {
    image: "/assets/course/card 1.png",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
  {
    image: "/assets/course/card 2.png",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
  {
    image: "/assets/course/card 3.png",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
  {
    image: "/assets/course/card 4.png",
    title: "Balancing Productivity and Focus",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
  {
    image: "/assets/course/card 5.png",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
  {
    image: "/assets/course/card 6.png",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    price: "25",
  },
];

export default function CourseSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-[1199px] grid-cols-3 gap-[40px]">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            {...course}
          />
        ))}
      </div>
    </section>
  );
}