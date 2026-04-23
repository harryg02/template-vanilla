const addNumbers = (first, second) => {
  return first + second;
}

if (typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}

document.querySelector('#move-the-items').addEventListener('click', () => {
  // @todo this is the callback that fires when you click the "Move Items" button.
  // Reference the working example and get it working the same way.
  // This must match the approach of the working example, you're being graded on your ability
  // to figure that out.
  if (document.querySelector('#start-list > li') !== null) {
    document.querySelector('#end-list').append(document.querySelector('#start-list > li'))
  }
})

