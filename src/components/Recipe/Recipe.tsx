import * as S from "./Recipe.styles";

function Recipe() {
  return (
    <S.Main>
      <img
        src="https://static01.nyt.com/images/2009/04/14/health/14recipehealth_600/14recipehealth_600-articleLarge.jpg?w=1280&q=75"
        alt=""
        style={{ width: "100%", aspectRatio: "16/9" }}
      />
      <S.NameRow>
        <S.MealName>Spinach, Tofu and Sesame Stir-Fry</S.MealName>
        <S.PortionsGroup>
          <div style={{ marginBottom: "0.5rem" }}>portions:</div>
          <S.PortionSizeGroup>
            <S.PortionSizeButton style={{ backgroundColor: "#cfe0c3" }}>
              -
            </S.PortionSizeButton>
            <S.PortionsInput defaultValue={3} />
            <S.PortionSizeButton
              style={{ backgroundColor: "#70a9a1", color: "#fff" }}
            >
              +
            </S.PortionSizeButton>
          </S.PortionSizeGroup>
        </S.PortionsGroup>
      </S.NameRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/canola-oil.png" alt="canola oil" />
        <S.IngredientName>Canola oil</S.IngredientName>
        <S.IngredientQuantity>1</S.IngredientQuantity>
        <S.IngredientQuantity>tbs</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/tofu.png" alt="tofu" />
        <S.IngredientName>Tofu, small dices</S.IngredientName>
        <S.IngredientQuantity>0.5</S.IngredientQuantity>
        <S.IngredientQuantity>lb</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/garlic.png" alt="garlic" />
        <S.IngredientName>Garlic, minced</S.IngredientName>
        <S.IngredientQuantity>1</S.IngredientQuantity>
        <S.IngredientQuantity>clove</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/ginger.png" alt="ginger" />
        <S.IngredientName>Ginger</S.IngredientName>
        <S.IngredientQuantity>1</S.IngredientQuantity>
        <S.IngredientQuantity>tsp</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/chili.png" alt="chili flakes" />
        <S.IngredientName>Chili flakes</S.IngredientName>
        <S.IngredientQuantity>0.25</S.IngredientQuantity>
        <S.IngredientQuantity>tsp</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/soy-sauce.png" alt="soy sauce" />
        <S.IngredientName>Soy sauce</S.IngredientName>
        <S.IngredientQuantity>-</S.IngredientQuantity>
        <S.IngredientQuantity>taste</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/spinach.png" alt="spinach" />
        <S.IngredientName>Spinach</S.IngredientName>
        <S.IngredientQuantity>6</S.IngredientQuantity>
        <S.IngredientQuantity>oz</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/sesame.png" alt="sesame seeds" />
        <S.IngredientName>Sesame seeds, toasted</S.IngredientName>
        <S.IngredientQuantity>2</S.IngredientQuantity>
        <S.IngredientQuantity>tbs</S.IngredientQuantity>
      </S.IngredientsRow>
      <S.IngredientsRow>
        <S.IngredientIcon src="/img/sesame-oil.png" alt="sesame oil" />
        <S.IngredientName>Sesame oil</S.IngredientName>
        <S.IngredientQuantity>1</S.IngredientQuantity>
        <S.IngredientQuantity>tbs</S.IngredientQuantity>
      </S.IngredientsRow>
      <p>recipe step x</p>
      <p>step progress bar</p>
      <p>footer w options</p>
    </S.Main>
  );
}

export default Recipe;
