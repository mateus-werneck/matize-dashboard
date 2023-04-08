import { MatizeForm, MatizeFormInput } from '@Components/Form/Standard';
import SearchIcon from '@mui/icons-material/Search';
import { ZodType, z } from 'zod';
import { SearchBarContainer } from './style';

export const SearchBar = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SearchBarContainer>
      <SearchIcon color="disabled" />
      <MatizeForm
        formInputs={getFormInputs()}
        validationSchema={getValidationSchema()}
        onSubmit={onSubmit}
      />
    </SearchBarContainer>
  );
};

function getFormInputs(): MatizeFormInput[] {
  return [
    {
      name: 'searchBarInput',
      type: 'search'
    }
  ];
}

function getValidationSchema(): ZodType<any, any, any> {
  return z.object({
    searchBarInput: z.string().max(256, 'Digite um valor válido.')
  });
}
