/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 ">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src=""
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
              <p className="text-gray-600 text-lg mb-4">
                Hello! I am Safwan, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I am here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you are just starting out or looking to sharpen your skills, you will find a variety of resources and insights here. Lets explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Safwan Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600">
              From curious beginner to developer, here is how Saf navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="https://th.bing.com/th?id=OIP.kdyoEmidIBjPMl3SXpN8EwHaEa&w=323&h=193&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="Safwan as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600">
                  Safwan’s coding journey began in high school when he stumbled upon his first programming language—C. What started as a simple curiosity quickly turned into a passion, as i spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/2.jpg" alt="Safwan learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Diving Deeper</h3>
                <p className="mt-4 text-gray-600">
                Safwan’s thirst for knowledge is rise up. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Safwan quickly expanded his skill set.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/1.jpg" alt="working on a project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600">
                  With several years of experience, I began tackling more significant challenges. From contributing to open-source projects to developing his own applications, I continued to push the limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/4.jpg" alt="Safwan mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800">Giving Back</h3>
                <p className="mt-4 text-gray-600">
                  Today, Safwan is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing blog tutorials, giving talks, and helping new coders find their footing in the world of software development. For me, coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}