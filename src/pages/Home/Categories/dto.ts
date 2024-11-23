export interface ICategory {
  icon: string;
  name: string;
  href: string;
}

export interface ICategoriesProps {
  categories: ICategory[];
}
