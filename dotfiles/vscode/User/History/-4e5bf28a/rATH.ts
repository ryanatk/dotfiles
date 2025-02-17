import Utils from '../utils/utils';

interface CountryListItem {
  label: string;
  value: string;
}

interface HookProps {
  ignoreFlag?: boolean;
}

export function useSellToCountries(ignoreFlag): CountryListItem[] {
  const sortFn = (a, b) => a.label.localeCompare(b.label);
  const filterFn = ignoreFlag ? () => true : ({ sellTo }) => sellTo;

  const list: CountryListItem[] = Utils.getSellToCountriesList()
    .sort(sortFn)
    .filter(filterFn);

  return list;
}
