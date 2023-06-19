import React, { useEffect, useState } from "react";
import FormButton from "../../components/FormControl/FormButton";
import FormRadio from "../../components/FormControl/FormRadio";
import Divider from "../../components/Test/Divider";
import { useNavigate, Link } from "react-router-dom";
import { fetchQuestions, calculatePersonality } from "../../api";

const PersonalityTest: React.FC = () => {
  const [question, setQuestion] = useState([]);
  const [showQuestion, setShowQuestion] = useState([]);
  const [checkedPairs, setCheckedPairs] = useState<any>({});
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const handleClick = async () => {
    const answerCount = Object.keys(checkedPairs).length;
    const pagePerCount = question.slice(0, pageNumber * 6).length;
    const email = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(email.email);
    if (pagePerCount === answerCount) {
      setPageNumber(pageNumber + 1);
      setShowQuestion(question.slice(pageNumber * 6, (pageNumber + 1) * 6));
      if (pageNumber === Math.ceil(question.length / 6)) {
        const getPersonality: any = await calculatePersonality({
          checkedPairs: checkedPairs,
          email: email.email,
        });
        navigate("/result");
        console.log("final", getPersonality);
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCheckedPairs({
      ...checkedPairs,
      [Number(name.split(" ")[1])]: Number(value),
    });
  };

  const radioGrop = [
    {
      className: "h-20 w-20 md:accent-indigo-500",
      value: 3,
    },
    {
      className: "h-16 w-16 md:accent-indigo-500",
      value: 2,
    },
    {
      className: "h-12 w-12 md:accent-indigo-500",
      value: 1,
    },
    {
      className: "h-8 w-8 md:accent-gray-500",
      value: 0,
    },

    {
      className: "h-12 w-12 md:accent-pink-500",
      value: -1,
    },
    {
      className: "h-16 w-16 md:accent-pink-500",
      value: -2,
    },
    {
      className: "h-20 w-20 md:accent-pink-500",
      value: -3,
    },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await fetchQuestions();
      const question: any = Object.values(data);
      data && setQuestion(question);
      question.length > 0 && setShowQuestion(question.slice(0, 6));
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {});

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
          <Link
            to={"/test"}
            className="list-none px-6 py-4 border-t-4 text-2xl border-sky-800"
          >
            Take the Test
          </Link>
          <Link to={"/result"} className="list-none px-6 text-xl">
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
      <div className="justify-center pt-24 text-center grid m-auto">
        {showQuestion.map((questionValue, index) => (
          <React.Fragment key={questionValue["id"]}>
            <div className="w-10/12 m-auto">
              <p className="py-5 text-white text-3xl font-normal">
                {questionValue["questions"]}
              </p>
              <div className="flex align-middle items-center justify-center">
                <label className="text-2xl text-sky-800 font-normal">
                  Agree
                </label>
                {radioGrop.map((value, key) => (
                  <FormRadio
                    name={`radio ${questionValue["id"]}`}
                    className={value.className}
                    key={key}
                    index={index}
                    value={value.value}
                    handleChange={handleChange}
                  />
                ))}
                <label className="text-2xl text-orange-200 font-normal">
                  Disagree
                </label>
              </div>
            </div>
            <Divider />
          </React.Fragment>
        ))}

        <div className="flex justify-end w-11/12 pt-16">
          <FormButton
            className="py-4 mb-5 rounded-xl w-2/12 bg-violet-800 text-white"
            title="Next"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
