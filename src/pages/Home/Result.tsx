import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showPersonalityResult } from "../../api/index";
import { personalityImage } from "../../config/personality.image";

const PersonalityResult = () => {
  const [data, setData] = useState<any>({});
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("user") || "{}");
    const fetchData = async () => {
      const result: any = await showPersonalityResult({ email: email.email });
      console.log(result);
      result && setData(result.data);
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
          <Link
            to={"/result"}
            className="list-none px-6 py-4 border-t-4 text-2xl border-sky-800"
          >
            Your Result
          </Link>
          <Link to={"/relationship"} className="list-none px-6 text-xl">
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
      <div className="justify-center pt-24 text-center grid m-auto w-full">
        <div className="w-full absolute left-0 top-16">
          {Object.keys(data).length > 0 && (
            <>
              <img
                src={personalityImage[data.type]}
                alt="img"
                className="pb-8"
              />
              <p className=" font-bold font-serif text-7xl text-white">
                {data["personality"]}
              </p>
              <p className="py-3 font-medium text-gray-300 text-4xl">
                {data["type"]}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalityResult;
