const GetSpecialAttacks = ({ special }) => {
  const spec = [];

  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    spec.push({
      id, name, icon, description,
    });
  }

  return spec;
};

export default GetSpecialAttacks;
