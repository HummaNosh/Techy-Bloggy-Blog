// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#project-name').value;
//     const needed_funding = document.querySelector('#project-funding').value;
//     const description = document.querySelector('#project-desc').value;
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);
  
//   document.querySelector('.project-list').addEventListener('click', delButtonHandler);
// async function newFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const content = document.querySelector('input[name="content"]').value;

//   const response = await fetch(`/api/post`, {

//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       content,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
   
//   });
//   console.log("yayy its posted")

//   if (response.ok) {
//     document.location.replace('/all');
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelector('#new-post-form')
//   .addEventListener('submit', newFormHandler);

const newArticleFormHandler = async (event) => {
  event.preventDefault();
  
  const title = document.getElementById('new-Article-Title').value.trim();
  const content = document.getElementById('new-Article-Content').value.trim();

  if (title && content) {
    const response = await fetch('/api/New/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const cancelButtonHandler = async () => {
  document.location.replace('/dashboard');

}

document
  .querySelector('.newArticleForm')
  .addEventListener('submit', newArticleFormHandler);


  document
  .querySelector('.newArticleForm')
  .addEventListener('reset', cancelButtonHandler);