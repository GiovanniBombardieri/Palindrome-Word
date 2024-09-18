const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')

checkBtn.addEventListener('click', () => {
  palindrome();
  textInput.value = ''
})

function palindrome() {
  let inputUser = textInput.value

  if (textInput.value == '') {
    alert('Please input a value')
    result.innerHTML = ''
    return
  }

  result.value = ''

  const lowerCaseStr = textInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  console.log(lowerCaseStr)

  const reverseStr = [...lowerCaseStr].reverse().join('')
  console.log(reverseStr)

  if (lowerCaseStr === reverseStr) {
    result.innerHTML = `${inputUser} is a palindrome`
  } else {
    result.innerHTML = `${inputUser} is not a palindrome`
  }
}