import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My New Website',
      body: 'lorem ipsum ...',
      author: 'mario',
      id: 1,
    },
    {
      title: 'Welcome Party',
      body: 'lorem ipsum ...',
      author: 'yoshi',
      id: 2,
    },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum ...',
      author: 'mario',
      id: 3,
    },
  ]);
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All blogs'></BlogList>
      <BlogList blogs={blogs.filter((blog)=> blog.author==="mario")} title='Mario blogs'></BlogList>
    </div>
  );
};

export default Home;
