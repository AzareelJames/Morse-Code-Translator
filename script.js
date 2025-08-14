const input = document.createElement(`input`);
input.placeholder = `Enter input...`;
document.body.appendChild(input);
input.focus();

const result = document.createElement(`div`);
result.innerText = `.-- .- .. -`;
document.body.appendChild(result);

const Morse = 
[
`.-`,`-...`,`-.-.`,`-..`,`.`,`..-.`,`--.`,`....`,`..`,`.---`,`-.-`,
`.-..`,`--`,`-.`,`---`,`.--.`,`--.-`,`.-.`,`...`,`-`,`..-`,`...-`,
`.--`,`-..-`,`-.--`,`--..`,`.----`,`..---`,`...--`,`....-`,`.....`,
`-....`,`--...`,`---..`,`----.`,`-----`, `/`
];

const Char = [
`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,
`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`1`,`2`,`3`,`4`,`5`,`6`,
`7`,`8`,`9`,`0`, ` `
];

const type = document.createElement(`select`);
type.style.fontSize = `200%`;

for(let i of [`Text -> Morse`, `Morse -> Text`]){
    type.innerHTML += `<option>${i}</option>`;
}

document.body.appendChild(type);
var code = ``;

function mainloopAndCalculate(){
    setTimeout(() => {
        code = ``;

        if(type.value === `Text -> Morse`){
            for(let i of input.value.trim().toLowerCase()){
                if(Char.indexOf(i) === -1){
                    code = `Invalid Input (Letters or Numbers only)`;
                    break;
                }

                if(input.value.length > 85){
                    code = 
                    `input must be < 85, got ${input.value.length} characters`;
                    break;
                }

                code += `${Morse[Char.indexOf(i)]} `;
            }
        } else{
            for(let i of input.value.trim().split(` `)){
                if(Morse.indexOf(i) === -1){
                    code = `Invalid Morse Code`;
                    break;
                }

                if(input.value.length > 300){
                    code = 
                    `input must be < 300, got ${input.value.length} characters`;
                    break;
                }

                code += Char[Morse.indexOf(i)];
            }
        }

        result.innerText = code;

        mainloopAndCalculate();
    }, 250);
}


mainloopAndCalculate();

