import { createContext, Dispatch, SetStateAction, useState } from "react";

interface shopCard {
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
  count: number;
}
const shopFood: shopCard[] = [];
interface CustomePropsContext {
  foodId: shopCard[];
  setFoodId: Dispatch<SetStateAction<shopCard[]>>;
}
interface customContextProvideProps {
  children: React.ReactNode;
}
const CustomContext = createContext<CustomePropsContext>({
  foodId: shopFood,
  setFoodId: () => {},
});

const CustomContextProvider = ({ children }: customContextProvideProps) => {
  const [foodId, setFoodId] = useState(shopFood);
  console.log(foodId);

  return (
    <CustomContext.Provider value={{ foodId, setFoodId }}>
      {children}
    </CustomContext.Provider>
  );
};
export { CustomContext, CustomContextProvider };
