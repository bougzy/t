import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TwoRowTwoColumnCard = () => {
  return (
    <div>
    <Container>
    <Row>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:"400px"}}/>
        </Col> */}
        <Col xs={8} className="mx-auto mb-2">
          <h1 className="text-center" style={{color:"purple"}}>FEATURED <span className="fw-bold" style={{color:"purple"}}>MOVIES</span></h1>
        </Col>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:""}}/>
        </Col> */}
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/3b481fe/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fe6%2F89%2F32e3dcde46dcaa78a862f2c32b2c%2Fdigi24-shiftinggears-landscape-772x570-allnew.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">Shifting Gears</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/8acc659/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F38%2F9d%2Ff4a904a142b598b8e796af17ac98%2Fdigi24-aneasterbloom-landscape-772x570-allnew.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">An Easter Bloom</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/16f19ba/2147483647/strip/true/crop/2559x1897+1910+536/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F94%2F60%2Fc011eda745738089d5e7aa49b06f%2Fblinddatebookclub-0908-rt-rv1.jpg"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">Blind Date Book Club</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/81e80bd/2147483647/strip/true/crop/4984x3695+280+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F4c%2F1d%2Fbec86c234d83a7785cde6f63e1f7%2Flegendofthelostlocket-0044-rt-2.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">Legend Of The Love Locket</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/0676b8e/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Ff2%2F28%2F7e6876524fbfba6798c9535c10b6%2Fdigi22-hmm-14loveletters-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">14 Love Letters</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/8b778d6/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fc8%2F27%2Fd4be765b4d1d93c1ad64d66e6e99%2Fdigi23-3bed2bath1ghost-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">3 Bed, 2 Bath, 1 Ghost</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:"400px"}}/>
        </Col> */}
        <Col xs={8} className="mx-auto mb-2">
          <h1 className="text-center"></h1>
        </Col>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:""}}/>
        </Col> */}
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/936bc3f/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fff%2F88%2Feb3792574fd2a0e628b59876e81e%2Fdigi23-abiltmorechristmas-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Biltmore Christmas</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/8014093/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F57%2Fa0%2F1a6defd8f99910c9f0a971fb0889%2Fdigi19-ablueridgemountainchristmas-andscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Blue Ridge Mountain Christmas</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/06521f2/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fe2%2F56%2F629a62874758bd9db20888247dcf%2Fdigi22-acozychristmasinn-landscape-772x570.jpg"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Cozy Christmas Inn</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/58f7751/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fec%2F40%2F598493bdb39616a211546de6ee30%2Fhp17-slide-adashoflove-853x570-gen.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Dash of Love</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/54e450f/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F2a%2F12%2F0a8a740f0366b1b6dd78b163a8f9%2Fdigi19-godwinkchristmas-meantforlove-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Godwink Christmas: Meant for Love</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/b1eebca/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F41%2F4a%2Feae53b104301872b543ee118614a%2Fdigi23-aharvestwedding-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Harvest Wedding</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:"400px"}}/>
        </Col> */}
        <Col xs={8} className="mx-auto mb-2">
          <h1 className="text-center"></h1>
        </Col>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:""}}/>
        </Col> */}
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/c8dc50a/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F80%2F55%2Fe328e36b4d14a22991442c8cb91a%2Fdigi21-a-little-daytime-drama-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Little Day Time Dramma</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/275bcbd/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F86%2F73%2F68f42d024987a0a2035358be1466%2Fdigi20-anewyearsresolution-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A New Year Resolution</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/1e347df/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F4c%2F5f%2F5f86796d4767bd28745b7e664e2b%2Fdigi23-apictureofher-landscape-772x570.jpg"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Picture For Her</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/b2adf54/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F54%2F8c%2F70095d984eeda9e80b8eeb0f5923%2Fdigi23-apinchofportugal-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Royal Winter</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/2f5952a/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fc2%2F58%2F31923b274f05a812741527f370e7%2Fdigi23-asafariromance-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Safari Romance</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/e43f953/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fe1%2F26%2F063e30714105964c450acc60999c%2Fascottishlovescheme-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Scotish Love Scheme</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:"400px"}}/>
        </Col> */}
        <Col xs={8} className="mx-auto mb-2">
          <h1 className="text-center"></h1>
        </Col>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:""}}/>
        </Col> */}
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/d440e7f/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F54%2Fad%2Fabf8acff4f25884b7fc83fa52cdc%2Fdigi23-aseasonforfamily-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Season For Family</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/6131b58/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F38%2F62%2F66a09636cf8cbcfe3eca57e51e79%2Fdigi19-asummerromance-landscape-772x570-gen.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Summer Romance</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/8cc44fd/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F09%2F37%2Fa04fcf234e659eafb6e39a1b077d%2Fdigi22-hc-atailoflove-landscape-772x570.jpg"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Tail Of Love</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/d3e4d39/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fbc%2F41%2F8d2eea2144128b951bed4f7c15d6%2Fdigi24-atasteoflove-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Taste Of Love</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/37ea409/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F6a%2F13%2Fb5d539ceb62fe1bd9631060f074b%2Fdigi19-atasteofsummer-landscape-772x570-gen.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Taste Of Summer</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/50f46c9/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fb4%2Fcb%2F22e68c0ace1f45c7962a632f93e0%2Fdigi20-avalentinesmatch-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Valentine's Match</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:"400px"}}/>
        </Col> */}
        <Col xs={8} className="mx-auto mb-2">
          <h1 className="text-center"></h1>
        </Col>
        {/* <Col xs={2}>
          <hr className="my-5" style={{width:""}}/>
        </Col> */}
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/6ed2e0d/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F5d%2F9f%2F897593ec4f9999ffdc582c8ccdf1%2Fdigi23-title-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">A Very Venice Romance</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/4f44755/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F0e%2Fac%2Fa97e10cc843e3ff81032d4b579b0%2Fhc-hp-slidedl-815x570-all-of-my-heart-gen1.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">All Of My Heart</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/e8111a4/2147483647/strip/true/crop/769x570+0+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F52%2F61%2Fc6894b55dcee5d2b7f273fe74077%2Fdigi19-allsummerlong-landscape-772x570-gen.jpg"/>
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">All Summer Long</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/8acc659/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F38%2F9d%2Ff4a904a142b598b8e796af17ac98%2Fdigi24-aneasterbloom-landscape-772x570-allnew.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">An Easter Bloom</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/fcdaf2e/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2F55%2Fde%2Ff92444954d19a13a93c78f8995e6%2Fdigi21-anunexpectedchristmas-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">An Unexpected Christmas</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://hallmark.brightspotcdn.com/dims4/default/fd352a7/2147483647/strip/true/crop/769x570+2+0/resize/437x324!/format/webp/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd8%2Fc3%2F26ed3b704e189a3eafd6d192254c%2Fdigi21-asluckwouldhaveit-landscape-772x570.jpg" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title className="text-white">As Luck Would Have It</Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="d-none">
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default TwoRowTwoColumnCard;
