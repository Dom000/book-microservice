import React, { useEffect, useState } from "react";
import { BOOK_URL } from "../../../constants/endpoints";
import axios from "axios";
import { AiOutlineFileText } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import Button from "../../../components/common/Button";

interface booksInt {
  title: string;
  description: string;
  author: string;
  authorId: number;
  prices: number;
}

const Index: React.FC = () => {
  const BOOK_URLS = new BOOK_URL();
  const [allbooks, setallbooks] = useState<[]>([]);

  useEffect(() => {
    async function fetchBook() {
      const { data } = await axios.get(BOOK_URLS.CREATE_BOOK);
      console.log(data);

      setallbooks(data.data);
    }

    fetchBook();
  }, []);

  return (
    <div>
      {allbooks.length < 1 ? (
        <div className=" flex flex-col space-y-3 items-center">
          <AiOutlineFileText className="text-[50px] text-gray-400" />
          <p>No book has been published any book</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-4 p-5">
          {allbooks.map((books: booksInt, index) => (
            <div
              key={index}
              className="w-full md:max-w-[220px] space-y-3 flex flex-col p-1 items-center"
            >
              <BiSolidBookAlt className="text-[150px] text-gray-500 md:text-[120px]" />
              <div className="w-full items-center text-center ">
                <p className="font-bold">{books.title}</p>
                <p className="text-xs">{books.description}</p>
                <p className="text-xs">{books?.authorId}</p>
                <p className="font-bold">₦ {books?.prices}</p>
              </div>
              <Button type="submit" text={"view"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
