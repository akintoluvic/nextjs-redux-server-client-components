import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default SearchInput;
