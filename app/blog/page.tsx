/* eslint-disable @next/next/no-img-element */

import React from 'react';
//import SampleBlogs from '@/config/sampleblogs';
import { buttonVariants } from "@/components/ui/button"
import fs, { readFileSync } from "fs"
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';

interface BlogType {
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;
};

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent)

const blogs: BlogType[] = dirContent.map(file=>{
    const fileContent = readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent)
    const value: BlogType = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    imageUrl: data?.imageUrl
    }
    return value
})

console.log(blogs)

const BlogList = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog: BlogType, index: number) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl"
                    >
                        <img
                            src={blog.imageUrl?blog.imageUrl: "/blogimg.jpg"}
                            alt={blog.title}
                            className="w-full h-64 object-cover object-top"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="mb-4">{blog.description}</p>
                            <Link
                                href={`/blogpost/${blog.slug}`}
                                className= {buttonVariants({ variant: "default" })}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const metadata: Metadata = {
    title: 'Blogs - BlogIn',
    description: "Explore in-depth tutorials, coding tips, and the latest trends in software development at BlogIn. Whether you're a beginner or an experienced developer, our blog offers a wide range of topics from web development, algorithms, and best coding practices to advanced frameworks and tools. Empower your programming skills with expert insights and hands-on guides.",
  }
  
export default BlogList;
