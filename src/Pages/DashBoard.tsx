import { useState } from "react";
import { toast } from "react-toastify";


interface Expense {
  id: number;
  description: string,
  category: string;
  amount: number
}``

const User_name = "Doe"

const DashBoard: React.FC = () => {

  const [expense, setExpense] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<Expense>({
    id: 0,
    description: "",
    category: "",
    amount: 0,
  });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Expense Added");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { };
  return (
    <section className="bg-gray-200 py-10 px-6">
      <h2 className="font-bold text-2xl md:text-3xl my-2">Welcome {User_name}!</h2>
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
                value={newExpense.description}
                onChange={handleChange}
                className="block w-full outline-none border-2 border-gray-400 p-2"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                name="number"
                value={newExpense.amount}
                onChange={handleChange}
                className="block w-full outline-none border-2 border-gray-400 p-2"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="category">Category:</label>
              <select name="catgory" id="catgory" className="block w-full outline-none cursor-pointer border-2 border-gray-400 p-2">
                <option value="default" className="">Select Category</option>
                <option value="bills">Biils</option>
                <option value="grocery">Grocery shopping</option>
                <option value="essentials">Essentials</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 px-4 py-2 text-white w-full mt-3 mb-6"
            >
              Add
            </button>
          </form>

          <table className="w-full my-4">
            <thead className=" bg-gray-300 border-b border-white px-4 py-2">
              <tr>
                {["#", "Description", "Amount", "Category", "Action"].map((item, index) => (
                  <th key={index} className="md:text-[8px]">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>

              <tr className="text-center px-2">
                {["{newExpense.id}", "{newExpense.description}", "{newExpense.amount}", "{newExpense.category}", <button className="bg-red-700 hover:bg-red-600 px-4 py-2 text-white w-full my-3">
                  Delete
                </button>].map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section >
  );
};

export default DashBoard;
