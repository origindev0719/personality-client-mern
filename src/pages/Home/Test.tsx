import React from "react";
import FormButton from "../../components/FormControl/FormButton";

const PersonalityTest: React.FC = () => {
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
          <li className="list-none px-6 py-4 border-t-4 text-2xl border-sky-800">
            Take the Test
          </li>
          <li className="list-none px-6 text-xl">Your Result</li>
          <li className="list-none px-6 text-xl">Relationship</li>
        </div>
      </div>
      <div className="justify-center pt-24 text-center grid m-auto">
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You regularly make new friends.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You spend a lot of your free time exploring various random topics
            that pique your interest.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You regularly make new friends.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You spend a lot of your free time exploring various random topics
            that pique your interest.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You regularly make new friends.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="w-10/12 m-auto">
          <p className="py-5 text-white text-3xl font-normal">
            You spend a lot of your free time exploring various random topics
            that pique your interest.
          </p>
          <div className="flex align-middle items-center justify-center">
            <label className="text-2xl text-sky-800 font-normal">Agree</label>
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-8 w-8 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-12 w-12 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-16 w-16 md:accent-pink-500 text-indigo-600"
            />
            <input
              name="radio-quiz"
              type="radio"
              className="form-radio mx-5 h-20 w-20 md:accent-pink-500 text-indigo-600"
            />
            <label className="text-2xl text-orange-200 font-normal">
              Disagree
            </label>
          </div>
        </div>
        <div className="flex justify-end w-11/12 pt-16">
          <FormButton
            className="py-4 mt-2 rounded-xl w-2/12 bg-violet-800 text-white"
            title="Next"
          />
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
      </div>
    </div>
  );
};

export default PersonalityTest;
