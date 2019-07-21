import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserInfo = ({ id }) => {
  const [ genres, modGenres ] = useState([]);
  const [ subGenres, modSubGenres ] = useState([]);

  const [ genre1, addGenre1 ] = useState('');
  const [ genre2, addGenre2 ] = useState('');
  const [ genre3, addGenre3 ] = useState('');

  const [ subGenre1, addSubGenre1 ] = useState('');
  const [ subGenre2, addSubGenre2 ] = useState('');
  const [ subGenre3, addSubGenre3 ] = useState('');

  
  const handleChange = (event, func) => {
    console.log(event.target.value);
    genres.filter(e => {
      // e.name === event.target.value
    })


    func(event.target.value);
  };
  
  // post user info to signup
  const interestSubmit = (id, sub1, sub2, sub3) => {
    // dont allow re-render until complete!
    event.preventDefault();
    return axios.patch(`/signup/${id}`, { sub1, sub2, sub3 })
      .then(() => console.log('greaattt success!!!'))
      .catch(err => console.warn(err));
  };

  useEffect(() => {
    let ignore = false;

    async function fetch() {
      const result = await axios.get('/categories');
      if (!ignore) {
        modGenres(result.data);
        console.log(result);
      }
    }

    fetch();
    return () => ignore = true;
  }, []);

  // useEffect(() => {
  //   async function fetch() {
  //     const result = await axios.get('/categories');
  //     if (!ignore) {
  //       modSubGenres(result.data);
  //       console.log(result)
  //     }
  //   }

  //   fetch();
  //   return () => ignore = true;
  // }, [genre1.id, genre2.id, genre3.id]);

  return (
    <div>
      <Form>
        <Form.Group controlId="genre" className="1" >
          <Form.Label>1) Choose a Category!!</Form.Label>
          <Form.Control as="select" onChange={(e) => handleChange(e, addGenre1) }>
            { 
              genres.map(e => {
                return (
                  <option key={e.id} >
                    {e.name}
                  </option>
                );
              }) 
            }
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sub-genre" className="1" >
          <Form.Label>Now be More Specific</Form.Label>
          <Form.Control as="select" multiple onChange={(e) => handleChange(e, addSubGenre1) }>
            {/* <option>1</option>*/}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="genre" className="2" >
          <Form.Label>2) Choose a Category!!</Form.Label>
          <Form.Control as="select" onChange={(e) => handleChange(e, addGenre2) }>
            { 
              genres.map(e => {
                return (
                  <option key={e.id} >
                    {e.name}
                  </option>
                );
              }) 
            }
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sub-genre" className="2" >
          <Form.Label>Now be More Specific</Form.Label>
          <Form.Control as="select" multiple onChange={(e) => handleChange(e, addSubGenre2) }>
            {/* <option>1</option> */}
          </Form.Control>

        </Form.Group><Form.Group controlId="genre" className="3">
          <Form.Label>3) Choose a Category!!</Form.Label>
          <Form.Control as="select" onChange={(e) => handleChange(e, addGenre3) }>
            { 
              genres.map(e => {
                return (
                  <option key={e.id} >
                    {e.name}
                  </option>
                );
              }) 
            }
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="sub-genre" className="3">
          <Form.Label>Now be More Specific</Form.Label>
          <Form.Control as="select" multiple onChange={(e) => handleChange(e, addSubGenre3)}>
            {/* <option>1</option> */}
          </Form.Control>
        </Form.Group>

      </Form>

      <Button variant="success" size="lg" block onClick={()=> interestSubmit(id, subGenre1, subGenre2, subGenre3)}> Submit </Button>
    </div>
  );  
}

export default UserInfo; 