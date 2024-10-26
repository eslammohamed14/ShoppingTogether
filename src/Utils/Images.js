export const getImageURL = image => {
  return image?.startsWith('http') ? image : 'https://via.placeholder.com/150';
};
