import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface Props {
  backgroundImage: string;
  logo: string;
  title: string;
  rating: number;
  description: string[];
  deliveryTime?: number;
  shippingTitle?: string;
  deliveryFee?: number;
}

function VendorCard(props: Props) {
  const {
    title,
    rating,
    deliveryFee,
    deliveryTime,
    backgroundImage,
    logo,
    description,
  } = props;
  return (
    <div className="overflow-clip rounded-md shadow-md">
      <div className="h-[17rem]">
        <img className="h-56 w-full object-cover" src={backgroundImage} />
        <img
          className="mx-5 h-20 w-20 translate-y-[-50%] rounded-md object-cover shadow-sm"
          src={logo}
        />
      </div>
      <div className="px-5 pb-5">
        <div className="flex flex-row  items-center justify-between text-xs">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="flex flex-row items-center gap-1 rounded-md bg-green-100 px-1 text-green-800">
            <span>{rating}</span>
            <StarIcon className="!w-4" />
          </span>
        </div>
        <div className="mt-2 flex flex-row flex-wrap gap-2 text-sm">
          {description.map(item => (
            <span>{item}</span>
          ))}
        </div>
        <div className="mt-4 flex flex-row items-center justify-between gap-3 text-sm">
          <div className="flex flex-row items-center gap-3 text-sm">
            <span className=" whitespace-pre-wrap text-gray-400">
              پیک فروشنده
            </span>
            <span>{deliveryFee} هزار تومان</span>
          </div>
          <span className="flex flex-row items-center gap-1 text-gray-500">
            <span>تا {deliveryTime} دقیقه</span>
            <AccessTimeIcon className="!w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default VendorCard;
