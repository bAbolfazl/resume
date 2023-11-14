import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Multiselect from "multiselect-react-dropdown";

import skillSets from "../../configs/skillsSet";

const AddForm = ({ appData, setAppData }) => {
  const [form, setForm] = useState({
    name: "",
    family: "",
    birth: "",

    skills: [],
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = [...appData, form];

    setAppData(newData);
    localStorage.setItem("appData", JSON.stringify(newData));

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-full py-9">
      <form className="">
        <div>
          <div className="mb-4 flex items-center">
            <label htmlFor="Name" className="mr-4 font-bold">
              First Name:
            </label>
            <input
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              value={form.name}
              id="Name"
              type="text"
              placeholder="John"
              className="border p-2 rounded-lg grow"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="FamilyName" className="mr-4 font-bold">
              Family Name:
            </label>
            <input
              onChange={(e) =>
                setForm((prev) => ({ ...prev, family: e.target.value }))
              }
              value={form.family}
              id="FamilyName"
              type="text"
              placeholder="Doe"
              className="border p-2 rounded-lg grow"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="age" className="mr-4 font-bold">
              Birth Date:
            </label>
            <input
              onChange={(e) =>
                setForm((prev) => ({ ...prev, birth: e.target.value }))
              }
              value={form.birth}
              id="FamilyName"
              type="date"
              placeholder=""
              className="border p-2 rounded-lg grow"
            />
          </div>
          <div>
            <Multiselect
              options={skillSets}
              selectedValues={form.skills}
              onSelect={(e) => setForm((prev) => ({ ...prev, skills: e }))}
              displayValue="name"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={onSubmit}
              className="bg-green-600 rounded-lg px-3 py-2 text-white transition-colors hover:text-black mx-auto"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
