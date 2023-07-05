export type ProductsType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  amount?: number;
};

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
};

export type CartContextType = {
    addToCart: (product: ProductsType, id: number) => void;
}