import { useState } from "react";
const App = () => {
  const [inp, setInp] = useState("");
  const [details, setDetails] = useState([]);
  async function searchWord(event) {
    event.preventDefault();
    try {
      let data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`,
        {
          method: "GET",
        }
      );
      data = await data.json();
      setDetails(data[0]);
      console.log(details.meanings[0].definitions[0].definition);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="mt-10 w-1/2 mb-10 bg-sky-100 rounded-2xl ">
          <h1 className="text-center text-3xl mt-4 font-bold text-slate-700">
            Dictionary App
          </h1>
          <div className="m-10 flex justify-center items-center gap-5">
            <input
              type="text"
              name=""
              id=""
              value={inp}
              onChange={(event) => setInp(event.target.value)}
              className="w-3/4 h-9 rounded-xl p-3 bg-white border border-slate-300 focus:outline-none hover:border-slate-400 "
              placeholder="Enter a word . . "
            />
            <button
              onClick={searchWord}
              className="bg-white p-2 rounded-xl text-slate-700 border border-slate-300 hover:border-slate-400"
            >
              Search
            </button>
          </div>
          <div className="pl-10 ">
            <h1 className="font-bold text-xl text-slate-700">Word</h1>
            <h2>Audio</h2>
            <p>//Part Of Speech</p>

            <h2>Definition</h2>
            <h2>Example</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
