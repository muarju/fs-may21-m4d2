import { Col, Container, Row  } from 'react-bootstrap'

const Welcome = (props) => (
    <Container>
          <Row className="justify-content-center mt-3">
                    <Col xs={12} md={12}>
                    <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                            <h1 className="display-4">{props.title}</h1>
                            <p className="lead">{props.subtitle}</p>
                            </div>
                        </div>
                    </Col>
            </Row>
    </Container>
)

export default Welcome