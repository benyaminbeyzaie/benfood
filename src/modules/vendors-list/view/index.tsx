import { useMemo, useState } from "react";
import { useGetVendorsQuery } from "../query";
import VendorCard from "./VendorCard";
import VendorCardSkeleton from "./VendorCard/VendorCardSkeleton";
import { FinalResult } from "../query/models";
import ErrorIndicator from "../../../shared/components/ErrorIndicator";
import InfiniteScroll from "../../../shared/components/InfiniteScroll";

const LAT = 35.754;
const LONG = 51.328;
const PAGE_SIZE = 10;

function VendorsListPage() {
  const [page, setPage] = useState<number>(0);
  const [results, setResults] = useState<FinalResult[] | null>(null);

  const query = useGetVendorsQuery({
    lat: LAT,
    long: LONG,
    page: page,
    page_size: PAGE_SIZE,
  });

  useMemo(() => {
    if (query.isFetching) return;
    if (!query.data?.data.finalResult) return;
    if (!results) {
      setResults(query.data?.data.finalResult);
      return;
    }
    setResults([...results, ...query.data.data.finalResult]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PAGE_SIZE, page, query.data]);

  if (query.isLoading) {
    {
      [...Array(3).keys()].map(_ => {
        return <VendorCardSkeleton />;
      });
    }
  }

  return (
    <InfiniteScroll
      height="100vh"
      onNextCallback={() => setPage(page + 1)}
      isNextLoading={query.isFetching}
    >
      <div className="lg: mx-4 my-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results?.map((item, index) => {
          if (item.type === "TEXT") {
            return;
          }

          const vendor = item.data;
          return (
            <VendorCard
              key={index}
              description={vendor.description.split(",")}
              backgroundImage={vendor.backgroundImage}
              logo={vendor.defLogo}
              rating={vendor.rate}
              title={vendor.title}
              deliveryFee={vendor.deliveryFee}
              deliveryTime={vendor.deliveryTime}
            />
          );
        })}
        {query.isFetching &&
          [...Array(3).keys()].map(_ => {
            return <VendorCardSkeleton />;
          })}
        {query.isError && <ErrorIndicator />}
      </div>
    </InfiniteScroll>
  );
}

export default VendorsListPage;
