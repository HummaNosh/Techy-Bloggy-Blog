

const newPostFormHandler = async (event) => {
  event.preventDefault();
  
  const title = document.getElementById('new-Post-Title').value.trim();
  const content = document.getElementById('new-Post-Content').value.trim();

  if (title && content) {
    console.log("poo")
    const response = await fetch(`/api/New/`, {
      
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 
        "Content-Type": "application/json",
        
     },
    });
    console.log(response)
    if (response.ok) {
      console.log("wee")
      document.location.replace('/dashboard');
    } else {
      alert("borked");
    }
  }
};

const cancelButtonHandler = async () => {
  document.location.replace('/dashboard');

}

document
  .querySelector('.newPostForm')
  .addEventListener('submit', newPostFormHandler);


  document
  .querySelector('.newPostForm')
  .addEventListener('reset', cancelButtonHandler);