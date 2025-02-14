document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const questionDiv = document.getElementById('questionDiv');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultDiv = document.getElementById('result');
  
    // When the start button is clicked, show the question section and hide the start button.
    startButton.addEventListener('click', function() {
      questionDiv.style.display = 'block';
      startButton.style.display = 'none';
    });
  
    // When the "Yes" button is clicked, display a positive result.
    yesButton.addEventListener('click', function() {
      resultDiv.textContent = "I love you too baby tea b s'lanh o klang jeang🥺💗🌷";
      questionDiv.style.display = 'none';
    });
  
    // When the "No" button is clicked, display an alternate message.
    noButton.addEventListener('click', function() {
        // Container's dimensions
        const parentRect = questionDiv.getBoundingClientRect();
        // Button's dimensions
        const btnRect = noButton.getBoundingClientRect();
    
        // Calculate maximum x and y so the button stays fully inside
        const maxLeft = parentRect.width - btnRect.width;
        const maxTop = parentRect.height - btnRect.height;
    
        // Generate random x/y positions
        const newLeft = Math.random() * maxLeft;
        const newTop = Math.random() * maxTop;
    
        // Apply new positions (the CSS transition handles the animation)
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'px';
    
        // You can also change color or text if you want:
        // noButton.style.backgroundColor = '#ffb6c1';
      });
    });
  