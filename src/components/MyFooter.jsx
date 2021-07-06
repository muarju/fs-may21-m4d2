import { Col, Container, Row  } from 'react-bootstrap'

const MyNavBar = (props) => (
    <Container>
          <Row className="justify-content-center mt-3">
                    <Col xs={12} md={12}>
                        <p>This is a footer</p>
                    </Col>
            </Row>
    </Container>
)

export default MyNavBar