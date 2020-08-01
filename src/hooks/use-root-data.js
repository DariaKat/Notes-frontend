import { useStoreData } from './use-store-data';
import { storeContext } from '../store-provider';

export const useRootData = (dataSelector) =>
  useStoreData(storeContext, (contextData) => contextData, dataSelector);
