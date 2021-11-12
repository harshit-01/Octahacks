import React, { useState, useEffect } from 'react'

import DiscussionBoard from 'react-discussion-board'
import { useHistory } from 'react-router-dom';
import 'react-discussion-board/dist/index.css'

const DiscussionForum = (props) => {

  const history =  useHistory();
  const [posts,setPosts] = useState([]);
  //data will be fetched according to the link address

  useEffect(() => {
    //fetch data from the server just send the link 
    const ID = props.match.params.ID;
    
    // console.log(ID);

    setPosts( [
      {
        profileImage:
          'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
        name: 'Jane Doe',
        content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
        date: new Date('13 Nov 2021 09:12:00 GMT')
      },
      {
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        content:
          '<p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. </p>',
        date: new Date('13 Nov 2021 09:12:00 GMT')
      }
    ] );
  },[]);

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jane Doe',
        content: text,
        date: curDate
      }
    ])
  }
  return(
    <DiscussionBoard posts={posts} onSubmit={submitPost} />
  )
}

export default DiscussionForum
