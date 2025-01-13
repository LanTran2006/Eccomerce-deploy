import { FaEye } from "react-icons/fa";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
function ProductCard(props) {
  return (
    <tr>
      {/* id goes here */}
      <td>
        <div>{props.id}</div>
      </td>
      {/* image goes here */}
      <td>
        <img src={props.image} alt="product" className="w-20 h-20"></img>
      </td>
      {/* name goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">
        {props.name}
      </td>

      {/* price goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">
        {props.price}đ
      </td>

      {/* brand goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">
        {props.brand}
      </td>

      {/* status goes here */}
      <td className="px-4 py-3 text-sm font-medium text-green-800">
        <span className="fa fa-thumbs-down">In stock</span>
      </td>

      {/* action goes here & change a to Link later */}
      <td className="px-4 py-3 text-sm flex justify-center">
        <a
          href="/admin/product/view-details/1"
          className="flex flex-row items-center gap-2 no-underline px-2 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
        >
          <FaEye />
          View
        </a>
        <a
          href="/admin/product/edit-product/1"
          className="flex flex-row items-center gap-2 no-underline mx-2 px-2 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 bg-yellow-300 border border-transparent rounded-lg active:bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:shadow-outline-purple"
        >
          <FaPenToSquare />
          Update
        </a>
        <a
          href="/admin/product/delete-product/1"
          className="flex flex-row items-center gap-2 no-underline px-2 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
        >
          <FaRegTrashCan />
          Delete
        </a>
      </td>
    </tr>
  );
}

export default ProductCard;
