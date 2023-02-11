const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blogTitle = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();

    if (blogTitle && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title: blogTitle, description: description}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      
      } else {
        alert('Failed to create product');
      }
    }
  };
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete this product');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  