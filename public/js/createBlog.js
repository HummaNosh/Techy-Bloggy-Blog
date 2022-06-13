

// const newPostFormHandler = async (event) => {
//   event.preventDefault();
  
//   const title = document.getElementById('new-Post-Title').value.trim();
//   const content = document.getElementById('new-Post-Content').value.trim();

//   if (title && content) {

//     const response = await fetch(`/api/New/`, {
//       method: 'POST',
//       body: JSON.stringify({ title, content }),
//       headers: { 
//         "Content-Type": "application/json",
        
//      },
//     });
//     console.log(response)
//     if (response.ok) {

//       document.location.replace('/dashboard');
//     } else {
//       alert("borked");
//     }
//   }
// };

// const cancelButtonHandler = async () => {
//   document.location.replace('/dashboard');

// }

// document
//   .querySelector('.newPostForm')
//   .addEventListener('submit', newPostFormHandler);


//   document
//   .querySelector('.newPostForm')
//   .addEventListener('reset', cancelButtonHandler);


  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-desc").value.trim();
  
    if (title && content) {
      console.log(title, content);
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title: title, content: content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);