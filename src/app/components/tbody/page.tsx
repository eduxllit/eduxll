"use client";
import React from 'react'

interface TbodyProps {
    response: any;
}

const Tbody = ({response}:TbodyProps) => {
    const [inquires, setInquires] = React.useState([]);
  return (
    <tbody>
    {response?.map((user: any, index: any) => (
      <>
        <tr className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
          <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue">
            <div
              className="titlemet titlemet line-clamp-1 max-w-[200px]"
              title={user?.name}
            >
              {user?.name}
            </div>
          </td>
          <td className="p-3  text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            <div
              className="titlemet line-clamp-1 max-w-[200px]"
              title={user?.email}
            >
              {user?.email}
            </div>
          </td>

          <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            {user?.phone}
          </td>
          <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            <div className="flex gap-[10px]">
              {user?.work_experience}
            </div>
          </td>
          <td
            className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue"
            key={index}
          >
            {user?.courseName}
          </td>
        </tr>
      </>
    ))}
    {response?.map((blog: any, index: any) => {
      return <></>;
    })}
  </tbody>
  )
}

export default Tbody
