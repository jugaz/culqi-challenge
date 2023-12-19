export const useImages = () => {
  const getImagePath = (filename) => {
    return new URL(`../assets/${filename}`, import.meta.url);
  };
  return {
    getImagePath,
  };
};


export const lazyView = (view) => {
  const file = import.meta.glob(`../views/**/*.vue`);
  const viewFile = file[`../views/${view}.vue`];
  return viewFile;
};
