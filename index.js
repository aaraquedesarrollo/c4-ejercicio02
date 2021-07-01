const { info } = require("console");
const { readdir, stat, statSync } = require("fs");
const { freemem, version, userInfo, homedir } = require("os");
const path = require("path");
const { platform } = require("process");

console.log("Hackeando tu sistema operativo...");

const bytesToMb = (bytes) => {
  return (bytes / 1024 / 1024).toFixed(0);
};

setTimeout(() => {
  if (platform === "win32") {
    console.log("Tú no molas mucho");
  } else if (platform === "linux") {
    console.log("Tú molas");
  } else if (platform === "darwin") {
    console.log(
      "Tú no molas nada. Bueno, excepto si eres Geraldine o Pol. En ese caso molas. Pero por ser tú, no por usar Mac"
    );
  }

  console.log(`Cuidado, que te quedan ${bytesToMb(freemem())} Mb de RAM libre`);

  console.log(`La version de tu sistema operativo es: ${version}`);

  console.log(
    `Tu usuario del sistema operativo es ${
      userInfo().username
    } y tu carpeta es ${homedir()}`
  );

  console.log(homedir());

  console.log(`Éstos son los archivos y carpetas de tu carpeta de usuario:`);
  readdir(homedir(), (err, files) => {
    if (err) {
      return;
    }
    for (file of files) {
      informacionFile = statSync(path.join(homedir(), file));
      console.log(
        file,
        informacionFile.size + " bytes",
        informacionFile.isDirectory() ? "Es un directorio" : "Es un archivo"
      );
    }
  });
}, 2000);
