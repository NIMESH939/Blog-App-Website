import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          className="Social-image"
        >
          <path
            d="M3 6h18"
            stroke="#57595e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            stroke="#57595e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="5"
            y="6"
            width="14"
            height="16"
            rx="2"
            stroke="#57595e"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="11"
            x2="10"
            y2="17"
            stroke="#57595e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="11"
            x2="14"
            y2="17"
            stroke="#57595e"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </td>
    </tr>
  );
};

export default BlogTableItem;
