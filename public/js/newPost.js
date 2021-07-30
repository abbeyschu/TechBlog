const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#newTitle').value;
    const content = document.querySelector('#newContent').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post')
    .addEventListener('click', newFormHandler);
  