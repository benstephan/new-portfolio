import React from 'react';
import Hero from '../components/Hero.js';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

class Works extends React.Component {
  
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

        return(
          <>
          <Helmet>
            <title>Ben Stephan Design - Blog</title>
            <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
          </Helmet>
          <Hero title="Blog" text="My work page is my laboratory for my creative projects. No client work is presented here, because I am employed full-time at beMarketing Solutions, as a senior web developer. This is more for fun." />
          <div id="blog">
          <Container>
          <Row>
          <Col md={{span:10, offset:1}}>
          
          {this.state.todos.map((todo) => (
            <>
              <div className="post">
              <div className="post-title">
              <div className="bordered"></div>
              <h2><a href={todo.slug}><strong dangerouslySetInnerHTML={ { __html:todo.title.rendered } }></strong></a></h2>
              <Image src={todo.fimg_url} fluid />
              </div>

              <Col md={{span:10, offset:1}}>
              <div dangerouslySetInnerHTML={ { __html:todo.excerpt.rendered } }></div>
              </Col>
              </div>
            </>
            
          ))}
        
        </Col>
        </Row>
        </Container>
        </div>
        </>
        )
    }
}

export default Works;