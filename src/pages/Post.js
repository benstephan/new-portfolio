import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

class Post extends React.Component {
  
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('https://zms.benstephan.com/index.php/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  
  
    render() {
      let urlID = window.location.href.split('/').pop()

        return(
          
          <Container>
          <Row>
          <Col md={{span:10, offset:1}}>
          
          {this.state.todos.filter(todo => todo.slug==urlID).map((todo) => (
            <>
            <Helmet>
                <title>Ben Stephan Design - {todo.title.rendered}</title>
                <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
            </Helmet>
              <div className="post-title">
              <div className="bordered"></div>
              <h2><strong dangerouslySetInnerHTML={ { __html:todo.title.rendered } }></strong></h2>
              <Image src={todo.fimg_url} fluid />
              </div>

              <Col md={{span:10, offset:1}}>
              <div dangerouslySetInnerHTML={ { __html:todo.content.rendered } }></div>
              </Col>
            </>
            
          ))}
        
        </Col>
        </Row>
        </Container>
        )
    }
}

export default Post;