import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { relationship } from "../../api/index";

const Realationship = () => {
  const Table_Head = ["Name", "Type", "Personality", "Relationship"];
  const scoreClassName = ["red", "orange", "indigo", "green", "sky"];
  const [users, setUsers] = useState([]);
  const [score, setScore] = useState([
    "Bad",
    "Warning",
    "Normal",
    "Good",
    "Perfect",
  ]);
  const [relationData, setRelationData] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("user") || "{}");
    const fetchData = async () => {
      const result: any = await relationship({ email: email.email });
      if (result) {
        setUsers(result.data.users);
        setRelationData(result.data.relationship);
        console.log(result.data.relationship);
      }
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="bg-[#4298b4] min-h-screen">
      <div className="px-5 flex justify-between border-red-200 fixed w-full bg-white">
        <div className="py-3">
          <img
            src="https://www.16personalities.com/static/images/system/logo.svg"
            alt="logo"
            className="w-6/12"
          />
        </div>
        <div className="flex items-center">
          <Link to={"/test"} className="list-none px-6 text-xl">
            Take the Test
          </Link>
          <Link to={"/result"} className="list-none px-6 text-xl">
            Your Result
          </Link>
          <Link
            to={"/relationship"}
            className="list-none px-6 py-4 border-t-4 text-2xl border-sky-800"
          >
            Relationship
          </Link>
          <button
            onClick={logout}
            className=" px-6 py-3 bg-pink-700 rounded-md text-md text-white"
          >
            Logout
          </button>
        </div>
      </div>
      {relationData && (
        <div className="justify-center pt-36 text-center m-auto w-full">
          <div className="h-full w-full flex justify-center">
            <table className="w-8/12 min-w-max table-auto text-center">
              <thead>
                <tr>
                  {Table_Head.map((head, index) => (
                    <th
                      key={index}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-cyan-100"
                    >
                      <span className="font-normal leading-none opacity-70">
                        {head}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-6">
                      {user.username}
                    </td>
                    <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-6">
                      {user.type}
                    </td>
                    <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-6">
                      {user.personality}
                    </td>
                    <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-6">
                      {index < relationData.length && (
                        <p
                          className={` bg-${
                            scoreClassName[relationData[index].score]
                          }-800 p-1 rounded-xl text-white`}
                        >
                          {score[relationData[index].score]}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Realationship;
