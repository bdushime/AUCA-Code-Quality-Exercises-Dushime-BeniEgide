function reverseVowels(str) {
  const vowels = 'aeiouAEIOU';
  let arr = str.split('');

  let vowelChars = arr.filter(ch => vowels.includes(ch));

  vowelChars.reverse();

  let vowelIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = vowelChars[vowelIndex++];
    }
  }

  return arr.join('');
}