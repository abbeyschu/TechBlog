const postId = document.querySelector('postId').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#editTitle').value;
  const content = document.querySelector('#editContent').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-button')
  .addEventListener('click', deleteClickHandler);
