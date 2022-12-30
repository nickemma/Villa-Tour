import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { storeType } from '../../redux/configureStore';
import FileBase from 'react-file-base64';
import ChipInput from 'material-ui-chip-input';

interface TourEditProps {
  id: string;
  show: boolean;
  handleClose: () => void;
}

const TourEdit: React.FC<TourEditProps> = ({ id, show, handleClose }) => {
  const tours = useSelector((store: storeType) => store.tourData.userTours);
  const tour = tours.find((tour) => tour._id === id);

  const [title, setTitle] = useState(tour?.title);
  const [description, setDescription] = useState(tour?.description);
  const [tags, setTags] = useState(tour?.tags);
  const [imageFile, setImageFile] = useState(tour?.imageFile);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <ChipInput
                fullWidth
                variant="outlined"
                value={tags}
                onAdd={(chip) => setTags(chip)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FileBase
                type="file"
                value={imageFile}
                multiple={false}
                onDone={({ base64 }) => setImageFile(base64)}
                onchange={(e) => setImageFile(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Update Tour
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TourEdit;
