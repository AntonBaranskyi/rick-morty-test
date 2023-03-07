const getHeroData = async (url) => {
  let responce = await fetch(url);

  if (!responce.ok) {
    throw new Error`Could not fetch this ${url}, status: ${responce.status}`();
  }

  return await responce.json();
};

export const getAllHeroes = async () => {
  const res = await getHeroData("https://rickandmortyapi.com/api/character");

  return res.results.slice(0,8);
};

export const getHeroById = async (id)=>{
  const res = await getHeroData(`https://rickandmortyapi.com/api/character/${id}`)

  return await res;
}
