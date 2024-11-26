import { useState } from "react";
import { toast } from "react-toastify";


const DashBoard = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Expense Added");
  };
  return (
    <section className="bg-gray-200 py-10 px-6">
      <h2 className="font-bold text-2xl md:text-3xl my-2">Welcome Liz!{ }</h2>
      <div className="container m-auto max-w-2xl">
        <div className="bg-stone-50 shadow-md py-4 px-2">
          <form onScroll={handleSubmit}>
            <h2 className="text-2xl text-center font-semibold my-5">Budgets</h2>
            <div className="mb-2">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full outline-none border-2 border-gray-400 p-2"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                name="number"
                className="block w-full outline-none border-2 border-gray-400 p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 px-4 py-2 text-white w-full my-3"
            >
              Add
            </button>
          </form>

          <div className="py-6 m-auto">
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr] bg-gray-200 p-2">
              <p>#</p>
              <p>Description</p>
              <p>Amount</p>
              <p>Action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
