async function fetchRecipesAPI(searchQuery, requestType, recipeId) {
  const urlBase = "https://www.themealdb.com/api/json/v1/1/";
  const apiMethod = {
    search: `search.php?s=${searchQuery.replace(" ", "_")}`,
    random: "random.php",
    byId: `lookup.php?i=${recipeId}`,
    byCategory: `filter.php?c=${searchQuery}`,
  };

  const response = await fetch(urlBase + apiMethod[requestType]);
  const json = await response.json();
  const meals = json.meals;
  console.log(meals);
  return meals;
}

export default fetchRecipesAPI;
