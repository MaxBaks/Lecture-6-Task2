const GetSpecialAttacks = ({ special }) => {
  const spec = special;

  for (const i in spec) {
    if (spec[i].description === undefined) {
      spec[i].description = 'Описание недоступно';
    }
  }

  return spec;
};

export default GetSpecialAttacks;
