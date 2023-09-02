import styled from "styled-components";

export const Main = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 2rem;
  align-items: center;
`;

export const MealName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const PortionsGroup = styled.div`
  padding-left: 2rem;
  text-align: center;
`;

export const PortionSizeButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  font-size: 1.5rem;
`;

export const PortionSizeGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortionsInput = styled.input`
  width: 2rem;
  border: none;
  text-align: center;
  font-size: 1.5rem;
`;

export const IngredientsRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem auto;
`;

export const IngredientIcon = styled.img`
  width: 10%;
`;

export const IngredientName = styled.div`
  text-align: left;
  padding-left: 1rem;
  width: 60%;
`;

export const IngredientQuantity = styled.div`
  text-align: right;
  padding-left: 1rem;
  width: 15%;
`;

export const StepIngredients = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.5rem;
`;

export const RecipeStep = styled.div`
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #cfe0c3;
  margin-bottom: 0.5rem;
`;

export const RecipeActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0 0.5rem;
`;

export const RecipeActionIcon = styled.img`
  height: 2rem;
`;

export const RecipeTool = styled.img`
  width: 70%;
  margin: 0 auto 0.5rem;
`;
