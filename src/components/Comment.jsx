import React from 'react';
import { IoMdStar } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { MdReply } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

const App = () => {
  const comments = [
    {
      author: 'Ra Sigech',
      date: 'March 26, 2025',
      rating: 4,
      isVerified: true,
      text: 'Support your local business! This product is awesome - good quality and the materials are local. Wish there were more sites like this one that sold handcrafted products. Will definitely buy it again!',
      helpfulCount: 10,
    },
    {
      author: 'John Doe',
      date: 'April 1, 2025',
      rating: 5,
      isVerified: false,
      text: 'Absolutely love this product! Highly recommend it.',
      helpfulCount: 5,
    },
    // Add more comments as needed
  ];

  const Comment = ({ author, date, rating, isVerified, text, helpfulCount }) => {
    return (
      <div className=' text-gray-500 '>
        <hr className='bg-gray-600 mb-6' />
        <div className='flex justify-between items-center gap-2 text-sm'>
          <div className='flex gap-2'>
            <span>{author} -</span>
            <span>{date}</span>
          </div>
          <HiDotsVertical className='w-5 h-5' />
        </div>
        <div className='flex-col items-center py-5'>
          <div className='flex gap-1 text-lg items-center text-amber-800 mb-3'>
            {Array.from({ length: rating }, (_, index) => (
              <IoMdStar key={index} />
            ))}
            {isVerified && <TiTickOutline />}
            {isVerified && <p>Verified</p>}
          </div>

          <p>{text}</p>

          <div className='flex gap-2 items-center mt-6'>
            <p className='pr-3'>Was this helpful?</p>
            <AiOutlineLike />
            <p >{helpfulCount} <span>Yes</span> </p>
            <MdReply />
            <p>Reply</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default App;