export type cocktailType = {
  id: number;
  name: string;
  alcoholic: string;
  glass: string;
  img: string;
};

export type cocktailDetailType = {
  id: number;
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  img: string;
  ingredients: string[];
  instructions: string;
};

export type cocktailContextType = {
  cocktails: cocktailType[];
  loading: boolean;
  searchTerm: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
