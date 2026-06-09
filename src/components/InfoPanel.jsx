import { locationContent } from "../data/locationContent";

export function InfoPanel({ selectedLocation }) {
  if (!selectedLocation) {
    return (
      <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
        <h2 className="text-2xl font-bold mb-4">
          Location Information
        </h2>

        <p className="text-slate-500">
          Search for a location to view information.
        </p>
      </div>
    );
  }

  // safer key approach (recommended)
  const key = selectedLocation.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[()]/g, "");

  const content = locationContent[key];

  return (
    <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        {selectedLocation.name}
      </h2>

      {content ? (
        <>
          {/* Quick Facts */}
          <div className="space-y-3 mb-6">
            <p>
              <strong>Type:</strong> {selectedLocation.type}
            </p>

            {content.province && (
              <p>
                <strong>Province:</strong> {content.province}
              </p>
            )}

            {content.population && (
              <p>
                <strong>Population:</strong> {content.population}
              </p>
            )}

            {content.elevation && (
              <p>
                <strong>Elevation:</strong> {content.elevation}
              </p>
            )}

            {content.height && (
              <p>
                <strong>Height:</strong> {content.height}
              </p>
            )}

            {content.length && (
              <p>
                <strong>Length:</strong> {content.length}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">
              Description
            </h3>
            <p className="text-slate-700">
              {content.description}
            </p>
          </div>

          {/* Fact */}
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl">
            <h3 className="font-bold mb-2">
              Interesting Fact
            </h3>
            <p>{content.fact}</p>
          </div>

          {/* Essay */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              Essay for Students
            </h3>

            <p className="leading-8 text-slate-700 whitespace-pre-line">
              {content.essay}
            </p>
          </div>
        </>
      ) : (
        <p className="text-slate-500">
          No educational content available yet.
        </p>
      )}
    </div>
  );
}