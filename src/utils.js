export const getImageUrl = (path) => {
  if (!path) {
      console.error("getImageUrl was called with an undefined or null path");
      return null;
  }
  try {
      // Directly use `/assets/` as the base for all image paths.
      const resolvedUrl = new URL(`/images/${path}`, window.location.origin).href;
      console.log("Resolved Image URL:", resolvedUrl);
      return resolvedUrl;
  } catch (error) {
      console.error("Error resolving image URL:", error);
      return null;
  }
};
