const key= import.meta.env.VITE_KEY;
const url=import.meta.env.VITE_API_URL;
const host =import.meta.env.VITE_HOST;
import axios from 'axios';
 const textTranslation = async(userInput, language)=>{

  const options = {
    method: 'POST',
    url: url,
    params: {
      'to[0]': `${language}`,
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': `${key}`,
      'X-RapidAPI-Host': `${host}`
    },
    data: [
      {
        Text: `${userInput}`
      }
    ]
  };
  
  try {
    const response = await axios.request(options);
    const result = response.data[0].translations[0].text;
    return result;
  } catch (error) {
    console.error(error);
  }
 }
export default textTranslation;


