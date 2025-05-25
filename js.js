const commentInput = document.getElementById("commentInput");

const Submitbutton = document.getElementById("submitComment");

const commentsDiv = document.getElementById('comments');

// console.log(Submitbutton)

// console.log(commentInput)

/*
Submitbutton.addEventListener("click", () => {


     const comment = commentInput.value;

     console.log("Clicked!")
     console.log("comment: ", comment)

})
     */


Submitbutton.addEventListener('click', () => {
     const commentText = commentInput.value.trim();
     if (!commentText) {
          alert('Please enter a comment!');
          return;
     }

     // Create container for comment + button + hr
     const commentContainer = document.createElement('div');

     // Create comment paragraph
     const newComment = document.createElement('p');
     newComment.textContent = commentText;
     newComment.style.display = 'inline-block';
     newComment.style.marginRight = '10px';

     // Create Remove button
     const removeBtn = document.createElement('button');
     removeBtn.textContent = 'Remove';
     removeBtn.style.cursor = 'pointer';

     // Remove comment when button clicked
     removeBtn.addEventListener('click', () => {
          commentsDiv.removeChild(commentContainer);
     });

     // Create hr element
     const hr = document.createElement('hr');
     hr.style.marginTop = '10px';
     hr.style.marginBottom = '10px';

     // Append comment, button, and hr to container
     commentContainer.appendChild(newComment);
     commentContainer.appendChild(removeBtn);
     commentContainer.appendChild(hr);

     // Append container to comments div
     commentsDiv.appendChild(commentContainer);

     // Clear textarea
     commentInput.value = '';
});
