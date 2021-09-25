function count (){
  const formText = document.getElementById("content")
  formText.addEventListener("keyup", () => {
    const countVal = formText.value.length;
    const charNum = document.getElementById("char-num");
    charNum.innerHTML = `${countVal}文字`;
  });
};

window.addEventListener('load', count)