import ErrorIcon from "@mui/icons-material/Error";

function ErrorIndicator() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ErrorIcon className="m-2 !h-44 !w-44 text-red-400" />
      به نظر می‌رسه مشکلی پیش اومده!
    </div>
  );
}

export default ErrorIndicator;
