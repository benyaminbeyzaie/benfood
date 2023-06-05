import { ReactNode, useRef } from "react";

interface Props {
  height: string;
  children: ReactNode;
  onNextCallback: () => void;
  isNextLoading: boolean;
}

const InfiniteScroll = (props: Props) => {
  const { height, onNextCallback, children, isNextLoading } = props;
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleScroll = (target: HTMLElement) => {
    const scrollTop = Math.round(target.scrollTop);
    const clientHeight = Math.round(target.clientHeight);
    const scrollHeight = Math.round(target.scrollHeight);

    if (isNextLoading) return;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      onNextCallback();
    }
  };

  return (
    <div
      ref={overlayRef}
      style={{ height, overflow: "scroll" }}
      onScroll={(e: React.UIEvent<HTMLElement>) =>
        handleScroll(e.currentTarget)
      }
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;
