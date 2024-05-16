import { useState } from 'react'
import textTranslation from './service/TranslationService'

function App() {
const [userinput, setUserInput] = useState("");
const [translatedText, setTranslatedText] = useState("");
const [language, setLanguage] = useState("es");
const [loading, setLoading] = useState(false);

const translationHandler = async()=>{
  setLoading(true);
  const translationResult = await textTranslation(userinput, language);
  setTranslatedText(translationResult);
  setLoading(false);
}
  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center'>
   <div className='w-full max-w-3xl p-6 mx-auto bg-gray-800/80 backdrop-blur-lg rounded-lg shadow-xl'>
   <section className='flex flex-col items-center'>
    <h1 className='font-bold underline text-violet-400 py-4 text-center text-balance text-2xl'>Demo Text Translator</h1>
    <textarea rows="4" cols="50" className='w-full sm:w-3/4 border rounded-lg indent-2 placeholder:text-slate-700 my-2' name='userText' value={userinput} onChange={(e)=>setUserInput(e.target.value)} placeholder='Please enter the text you wish to translate'>

</textarea>
<select className='p-4 my-4 rounded-lg bg-violet-600 text-white'
      name='language'
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="es"> 🇪🇸 Spanish</option>
      <option value="en"> 🇺🇸 English</option>
      <option value="fr"> 🇫🇷 French</option>
      <option value="de"> 🇩🇪 German</option>
      <option value="it"> 🇮🇹 Italian</option>
      <option value="pt"> 🇧🇷 Portuguese</option>
      <option value="ko"> 🇰🇷 Korean</option>
      <option value="ja"> 🇯🇵 Japanese</option>
    </select>
<button className='p-4 my-4 rounded-lg bg-violet-600 text-white hover:bg-violet-700' onClick={translationHandler} disabled={loading}>
Translate
  </button>
    <h2 className='text-white text-lg text-balance my-2'>Translated Text:</h2>
    {loading ? <p className='text-white'>Translating...</p> :   <div className='w-full sm:w-3/4 border border-solid rounded-lg p-4'>
   <p className='text-pretty text-white'>{translatedText}</p>
    </div>}
    </section>
   </div>
   
    
    </div>
  )
}

export default App
