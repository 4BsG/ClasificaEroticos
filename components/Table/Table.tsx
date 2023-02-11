import { MdStars } from 'react-icons/md';

const Table = () => {
  return (
    <div className="bg-foreground w-full ">
      <table className="table-fixed w-full  ">
        <tbody>
          <tr className="border-b border-color-text border-opacity-10">
            <td className="py-3 ts-base">Ad Duration</td>
            <td className="py-3 ts-base text-end">1 Month</td>
            <td className=" py-3 flex items-center text-xs text-primary ml-2">
              <MdStars />
              <p className="ml-1">20 Points</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-3 ts-base">Ad Priority</td>
            <td className="py-3 ts-base text-end">1st Priority</td>
            <td className="py-3 flex items-center text-xs text-primary ml-2">
              <MdStars />
              <p className="ml-1">20 Points</p>
            </td>
          </tr>
          <tr>
            <td className="py-3 ts-base text-color-title">TOTAL</td>
            <td></td>
            <td className="py-3 flex items-center text-xs text-primary ml-2">
              <MdStars />
              <p className="ml-1">40 Points</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
