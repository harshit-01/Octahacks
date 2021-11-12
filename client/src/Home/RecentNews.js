import React from 'react';
import { Card,Button,Row,Col} from 'react-bootstrap';

function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

const news = [
    {
        title: 'Education',
        info:'Jee Mains Date'
    },
    {
        title: 'Education',
        info:'CBSE Date'
    },
    {
        title: 'Education',
        info:'Jee Mains Date'
    },
    {
        title: 'Education',
        info:'CBSE Date'
    },
]

const RecentNews = ()=>{
    return(
        <>
            <Card className="mt-1">
                <Card.Header className="text-info font-weight-bold"> <i class="fa fa-newspaper-o mr-1" aria-hidden="true"></i>Recent News
                </Card.Header>
            </Card>
            {news.map((data,index)=>{
                return(
                    <Card className="mt-1" border="info">
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <hr />
                            <p>{truncateString(data.info,25)}</p>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default RecentNews;