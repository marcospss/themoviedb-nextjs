import { useSWRInfinite } from 'swr';
import axios from '~/infrastructure/settings/axios';

const usePaginateData = (path: string) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const PAGE_LIMIT = 20;
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${path}&page=${index + 1}`,
    async (path) => {
      const response = await axios.get(path);
      return response?.data?.results;
    }
  );

  const response = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { response, error, isLoadingMore, size, setSize, isReachingEnd };
};

export default usePaginateData;
