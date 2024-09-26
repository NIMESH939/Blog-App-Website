import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({ authorImg, title }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image src={authorImg ? authorImg : assets.profile_icon} />
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{"15 April 2024"}</td>
      <td className="px-6 py-4">X</td>
    </tr>
  );
};

export default BlogTableItem;
