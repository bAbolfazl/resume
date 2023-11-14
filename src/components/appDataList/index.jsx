import { Link } from "react-router-dom";

const AppDataList = ({ appData }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {appData?.map(({ name, family, birth, skills, id }) => (
        <Link
          to={`/edit/${id}`}
          key={id}
          className="block border p-3 bg-gray-200 rounded-lg max-w-[300px]"
        >
          <div>
            <span className="font-bold">Name:</span> {name}
          </div>
          <div>
            <span className="font-bold">Famliy:</span> {family}
          </div>
          <div>
            <span className="font-bold">Birth:</span> {birth}
          </div>
          <div className="max-w-full overflow-hidden text-ellipsis">
            <span className="font-bold">Skills:</span>

            {skills?.map(({ name, id }) => (
              <span key={id} className="mx-1">
                {name},
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AppDataList;
