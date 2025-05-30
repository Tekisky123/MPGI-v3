import { useParams, useLocation, Link } from "react-router-dom";
import { getCollegeCommittees, getCommitteeDetails } from "../data/CellsCommitteesData";

const CellsCommittees = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const committeeId = searchParams.get("section");

  // Get current college and its committees
  const collegeData = getCollegeCommittees(collegeId || "");

  // Get specific committee if section is provided
  const committeeData = committeeId ? getCommitteeDetails(collegeId || "", committeeId) : null;

  // Handle errors
  if (!collegeData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">College Not Found</h2>
          <p className="text-gray-600 mb-6">The requested college could not be found.</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (committeeId && !committeeData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Committee Not Found</h2>
          <p className="text-gray-600 mb-6">The requested committee could not be found.</p>
          {/* <Link
            to={`/${collegeData.collegeId}/cells-committees`}
            className="inline-block bg-mpgin-blue  text-mpgin-darkBlue hover:bg-mpgin-darkBlue hover:text-mpgin-blue hover:underline font-medium py-2 px-6 rounded transition-colors"
          >
            View All Committees
          </Link> */}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {committeeData ? (
        // Single Committee Detail View
        <div className="space-y-8">
          {/* <Link
            to={`/${collegeData.collegeId}/cells-committees`}
            className="inline-flex items-center gap-2  bg-mpgin-blue  text-mpgin-darkBlue hover:bg-mpgin-darkBlue hover:text-mpgin-blue hover:underline font-medium py-2 px-6 rounded transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Committees
          </Link> */}

          {/* Committee Header */}
          <div className="bg-white shadow-md overflow-hidden border border-gray-200">
            <div className="bg-mpgin-blue text-mpgin-darkBlue p-4">
              <h1 className="text-xl md:text-2xl font-bold">{collegeData.collegeName}</h1>
              <h2 className="text-lg md:text-xl font-bold mt-1">{committeeData.title}</h2>
            </div>

            {/* Committee Body */}
            <div className="p-6">
              <p className="text-gray-700 mb-6">{committeeData.description}</p>

              {/* Member Table */}
              <div className="overflow-x-auto border border-gray-300 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Sr. No.
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Designation
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Position
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Mobile Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {committeeData.members.map((member, index) => (
                      <tr key={member.srNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {member.srNo}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.name}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                          {member.designation}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${member.position.toLowerCase() === "chairperson"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                              }`}
                          >
                            {member.position}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-md text-gray-700">
                          {member.mobileNumber ? (
                            <a href={`tel:${member.mobileNumber}`} className="text-blue-600 underline">
                              +91 {member.mobileNumber}
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // List All Committees
        <div className="space-y-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-mpgin-blue">{collegeData.collegeName}</h1>
            <h2 className="text-2xl font-semibold text-mpgin-darkBlue mt-2">Cells & Committees</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeData.committees.map((committee) => (
              <div
                key={committee.id}
                className="bg-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-300 rounded-lg"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">
                      <Link
                        to={`/${collegeData.collegeId}/cells-committees?section=${committee.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {committee.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{committee.description}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {committee.members.length} member{committee.members.length !== 1 ? "s" : ""}
                    </span>
                    <Link
                      to={`/${collegeData.collegeId}/cells-committees?section=${committee.id}`}
                      className="inline-flex items-center gap-2  bg-mpgin-blue  text-mpgin-darkBlue hover:bg-mpgin-darkBlue hover:text-mpgin-blue hover:underline font-medium py-2 px-6 rounded transition-colors"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CellsCommittees;