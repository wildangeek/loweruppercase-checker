const buttonCekHuruf = document.querySelector(".cek-huruf .buttonCek");

cekHurufAwal = (string) => {
  const regEx = new RegExp(/[A-Z]/);
  return regEx.test(string);
};

buttonCekHuruf.addEventListener("click", () => {
  const cekHuruf = document.getElementById("huruf").value;
  if (cekHurufAwal(cekHuruf.charAt(0))) {
    document.querySelector(".cek-huruf #output").innerHTML =
      "Huruf pertama nya huruf besar";
  } else {
    document.querySelector(".cek-huruf #output").innerHTML =
      "Huruf pertama nya huruf kecil";
  }
});