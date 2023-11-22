import { useState } from "react";
const App = () => {
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);

  async function searchWord(event) {
    event.preventDefault();
    let req = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`,
      {
        method: "GET",
      }
    );
    let data = await req.json();
    setData(data);
    console.log(data);
  }
  function playSound(url) {
    let audio = new Audio(url);
    audio.play();
  }
  return (
    <>
      <div className="flex justify-center h-screen text-slate-700">
        <div className="mt-10 w-1/2 mb-10 bg-sky-100 rounded-2xl ">
          <h1 className="text-center text-3xl mt-4 font-bold text-slate-700">
            Dictionary App
          </h1>

          <div className="m-10">
            <form onSubmit={searchWord} className="flex justify-center">
              <input
                type="text"
                name=""
                id=""
                value={inp}
                onChange={(event) => setInp(event.target.value)}
                className="w-2/3 h-9 rounded-xl p-3 bg-white border border-slate-300 focus:outline-none hover:border-slate-400 "
                placeholder="Enter a word . . "
              />
            </form>
          </div>
          {data && data.length > 0 && data[0].word ? (
            <div className="pl-10 ">
              <div className="flex justify-center items-center gap-5">
              <h1 className="font-bold text-3xl text-slate-700 ">
                {data[0].word.toUpperCase()}
              </h1>
              <img src="https://img.icons8.com/ios-filled/50/000000/speaker.png" alt="speaker" className="w-7 h-7 cursor-pointer" onClick={playSound(data[0].phonetics[0].audio)}/>
              <h2 className="text-2xl">{data[0].phonetic}</h2>

              </div>

              <p className="text-2xl">// {data[0].meanings[0].partOfSpeech}</p>
              <h2>{data[0].meanings[0].definitions[0].definition}</h2>
              <h2>Example</h2>
            </div>
          ) : (
            <h1 className="text-center text-3xl mt-4 font-bold text-slate-700">
              Word not found
            </h1>
          )
        }
        </div>
      </div>
    </>
  );
};

export default App;
