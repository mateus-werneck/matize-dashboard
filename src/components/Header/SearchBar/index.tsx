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
      <SearchIcon color="disabled" fontSize="small" />
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
      type: 'search',
      placeHolder: 'Pesquisar',
      styles: { width: '1080px', border: 'none', marginBottom: '0' }
    }
  ];
}

function getValidationSchema(): ZodType {
  return z.object({
    searchBarInput: z.string()
  });
}
