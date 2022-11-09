import { useState } from 'react';
import './App.css'

import { MdContentCopy } from 'react-icons/md';




function App() {
  const [password, setPassword] = useState({
    length: 8,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [handelText, setHandelText] = useState('');
 

  const handleChangeUppercase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  };

  const setPasswordLength = (val) => {
    setPassword({
      ...password,
      length: val,
    });
  };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = [')', '(', '*', '&', '!', '^', '$', '@', '#', '%'];

    const characterCodes = Array.from(Array(21)).map((e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = password;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffle = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffle(availableCharacters).slice(0, length);
      setHandelText(characters.join(''));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    <div className="box">
     
        <h2>Password Generator</h2>
      
          <input className='input'
            type="text"
            value={handelText}
           onChange={(e) => setHandelText(e.target.value)}
          />
         
           <MdContentCopy className='icon'/>
           
         <br/>
       
         
        
        
       
         
            <label> Select Password length</label>
         
        
            <input className='number'
              type="number"
              min="0"
              max="20"
              value={password.length}
              onChange={(e) => setPasswordLength(e.target.value)} />
          
        
       
         
          <div>
          <input type="checkbox" id='check' checked={password.uppercase} onChange={handleChangeUppercase} />
          <label id='lab'>Include uppercase letters</label>
         </div>
        
        <div>
          <input type="checkbox"  id='check' checked={password.lowercase} onChange={handleChangeLowercase} />
            <label id='lab'>Include lowercase letters</label>
            </div>
       
       
          <div>
          <input type="checkbox"   id='check' checked={password.numbers} onChange={handleChangeNumbers} />
            <label id='lab'>Include numbers</label>
            </div>
        
       
       <div>
          <input type="checkbox"  id='check' checked={password.symbols} onChange={handleChangeSymbols} />
            <label id='lab'>Include symbols</label>
            </div>
         
       
        
    
          <button className="gen" onClick={generatePassword}>
            Generate Password
          </button>
        
     </div>
   
  );
}

export default App;