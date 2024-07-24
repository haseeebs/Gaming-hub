import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";


const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(store => store.setSearchText);
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      if (ref.current) setSearchText(ref.current.value);
    };
  
  return (
    <form onSubmit={handleSubmit}>
        <InputGroup>
            <Input ref={ref} borderRadius={20} placeholder="Search games" variant={"filled"}/>
            <InputLeftElement children={<BsSearch />} />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
