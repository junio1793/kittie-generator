import { Cat } from "lucide-react";

function ButtonGetCat({ onClick }) {
  return (
    <div className="flex flex-auto gap-2">
      <h2 className="px-4 py-4">Press to Get A Lot Cats</h2>
      <button className="px-4 py-4" onClick={onClick}>
        <Cat />
      </button>
    </div>
  );
}
export default ButtonGetCat;
