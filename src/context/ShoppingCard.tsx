import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface shopCardType {
  foodId: string;
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
  count: number;
}
const shopFood: shopCardType[] = [];
interface categoryType {
  _id?: string;
  categoryName?: string;
}
const category: categoryType[] = [];
interface CustomePropsContext {
  foodList: shopCardType[];
  setFoodList: Dispatch<SetStateAction<shopCardType[]>>;
  foodData: shopCardType[];
  setFoodData: Dispatch<SetStateAction<shopCardType[]>>;
  categoryData: categoryType[];
  setCategoryData: Dispatch<SetStateAction<categoryType[]>>;
}
interface customContextProvideProps {
  children: React.ReactNode;
}
const CustomContext = createContext<CustomePropsContext>({
  foodList: shopFood,
  setFoodList: () => {},
  foodData: shopFood,
  setFoodData: () => {},
  categoryData: category,
  setCategoryData: () => {},
});

const CustomContextProvider = ({ children }: customContextProvideProps) => {
  const [foodList, setFoodList] = useState(shopFood);
  const [foodData, setFoodData] = useState(shopFood);
  const [categoryData, setCategoryData] = useState(category);
  useEffect(() => {
    const ssr = async () => {
      const res = await fetch("http://localhost:4000/api/category");
      const datas = await res.json();
      console.log("contextData", datas);
      setCategoryData(datas.categories);
    };
    ssr();
    setFoodList(foodList);
    setFoodData(foodData);
    console.log(categoryData);
  }, []);
  return (
    <CustomContext.Provider
      value={{
        foodList,
        setFoodList,
        foodData,
        setFoodData,
        categoryData,
        setCategoryData,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};
export { CustomContext, CustomContextProvider };
