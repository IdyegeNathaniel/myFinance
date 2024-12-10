import { useState } from "react";
import { toast } from "react-toastify";


const User_name = "Doe"

const DashBoard: React.FC = () => {
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [category, setCategory] = useState<string>();

  // const [expenses, setExpenses] = useState<Expense[]>([]);
  // const [newExpense,  ] = useState<Expense>({
  //   id: 0,
  //   date: "",
  //   description: "",
  //   category: "",
  //   amount: 0,
  // });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
    }

    toast.success("Expense Added");

    setDescription: ("");
    setAmount: ("");
    setCategory: ("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { };
  return (
    <section className="bg-gray-200 py-10 px-6">
      <h2 className="font-bold text-2xl md:text-3xl my-2">Welcome {User_name}!</h2>
      <div className="container m-auto max-w-2xl">
        <div className="bg-stone-50 shadow-md py-4 px-2">
          <form onScroll={handleSubmit}>
            <h2 className="text-2xl text-center font-semibold my-5">Finance</h2>
            <div className="mb-2">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={handleChange}
                className="block w-full outline-none border-2 border-gray-400 p-2"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="amount">Amount:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="number"
                  value={amount}
                  onChange={handleChange}
                  className="block w-full outline-none border-2 border-gray-400 p-2"
                />

                <input type="date" name="date" id="date" className="cursor-pointer outline-none border-2 border-gray-400 p-2" required />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="category">Category:</label>
              <select name="catgory" id="catgory" className="block w-full outline-none cursor-pointer border-2 border-gray-400 p-2" value={category}>
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
            <thead className="w-full bg-gray-300 border-b border-white px-4 py-2 ">
              <tr>
                {["Date", "Description", "Amount", "Category", "Action"].map((item, index) => (
                  <th key={index} className="md:text-lg">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
