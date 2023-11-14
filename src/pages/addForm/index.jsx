import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Multiselect from "multiselect-react-dropdown";

import skillSets from "../../configs/skillsSet";

import { v4 as uuidv4 } from "uuid";

const AddForm = ({ appData, setAppData, isEdit }) => {
  let params = useParams();

  let initialFormState = {
    name: "",
    family: "",
    birth: "",

    skills: [],
  };

  if (isEdit) {
    const currentItem = appData.find((item) => item?.id === params?.id);

    initialFormState = {
      name: currentItem?.name,
      family: currentItem?.family,
      birth: currentItem?.birth,

      skills: currentItem?.skills,
    };
  }

  const [form, setForm] = useState(initialFormState);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    let newData;
    if (!isEdit) {
      newData = [...appData, { id: uuidv4(), ...form }];
    } else {
      const dataWithDeletedItem = appData.filter(
        (data) => data?.id !== params.id
      );
      newData = [...dataWithDeletedItem, { id: params.id, ...form }];
    }

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
              className="mx-auto w-[300px]"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={onSubmit}
              className="bg-green-600 rounded-lg px-3 py-2 text-white transition-colors hover:text-black mx-auto"
            >
              {isEdit ? "Edit" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
