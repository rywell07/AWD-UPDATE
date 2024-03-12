var currentActiveDay = null;

function showBox(day) {
  var activeBox = document.getElementById('box-' + day);
  var activeButton = document.getElementById('button-' + day);

  // If a box is already active, mark it for exit
  if (currentActiveDay) {
    var currentActiveBox = document.getElementById('box-' + currentActiveDay);
    currentActiveBox.classList.add('exit');
    setTimeout(function () {
      currentActiveBox.classList.remove('active', 'exit');
    }, 500); // Ensure exit animation completes before removing classes
  }

  // Set background color and border color for the new active box
  activeBox.style.borderColor = getBoxColor(day);

  // Set button color to match the new active box color
  activeButton.style.backgroundColor = getBoxColor(day);
  activeButton.style.borderColor = getBoxColor(day);

  // Add 'active' class to trigger the entrance animation
  activeBox.classList.add('active');
  
  // Update the current active day
  currentActiveDay = day;
}

function resetBox() {
  // If a box is active, mark it for exit
  if (currentActiveDay) {
    var currentActiveBox = document.getElementById('box-' + currentActiveDay);
    currentActiveBox.classList.add('exit');
    setTimeout(function () {
      currentActiveBox.classList.remove('active', 'exit');
    }, 500); // Ensure exit animation completes before removing classes
  }

  // Reset the current active day
  currentActiveDay = null;
}

function getBoxColor(day) {
  switch (day) {
    case 'Monday':
      return 'red';
    case 'Tuesday':
      return 'blue';
    case 'Wednesday':
      return 'green';
    case 'Thursday':
      return 'yellow';
    case 'Friday':
      return 'black';
    case 'Saturday':
      return 'pink';
    case 'Sunday':
      return 'purple';
    default:
      return 'transparent';
  }
}
