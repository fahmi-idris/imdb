import { Store } from 'interfaces/app/loading';

// eslint-disable-next-line
export default function getLoading(store: Store, ids: string | string[]): any {
  if (!Array.isArray(ids)) {
    return store.data[ids];
  }
  return ids.map((id) => store.data[id]).some((loading) => loading);
}
