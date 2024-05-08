import fs from 'node:fs/promises'


const readPjson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url).pathname
    console.log(JSON.parse(await fs.readFile('./package.json', 'utf-8')));
}

const writeFile = async () =>{
    const newFile = new URL('./demo.js', import.meta.url).pathname
    await fs.writeFile('./demo.js', `console.log('yoooo!')`)
}

// readPjson()
writeFile()