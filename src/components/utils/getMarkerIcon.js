// utils/getMarkerIcon.js

export const getMarkerIcon = (type) => {
  switch (type) {
    case "city":
      return "🏙️";

    case "province":
      return "🟣";

    case "river":
      return "🌊";

    case "peak":
      return "🏔️";

    case "national_park":
      return "🌳";

    case "highway":
      return "🛣️";

    default:
      return "📍";
  }
};