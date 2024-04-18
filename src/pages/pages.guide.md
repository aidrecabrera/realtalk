# Guidelines when creating a Page for a route

> [!NOTE]
>
> You should always apply the class `page` for the parent page.

When making a page, it follows a [`container/presentation`](https://javascriptpatterns.vercel.app/patterns/react-patterns/conpres) pattern, where the parent page is the container and the child components are the
presentation. Each child components are separaated in the `components` folder.

### Responsibilities

- `Container` - responsible for fetching data.
- `Presentation` - responsible for rendering the data.

But there might be an exception where the a container can also contain another container. Hence, there can be a child container and its parent is also a container. This is usually the case when the parent container is responsible for fetching data for the child container.

Example: 

### Posts Page (Container)

```jsx
import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../api/posts';
import { Post } from '../components/Post';


export const Posts = () => {
  const { data, isLoading } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
```
### Post Component (Presentation)

```jsx
import React from 'react';

export const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
```
