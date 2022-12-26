import React, { useState } from 'react';
import ChipInput from 'material-ui-chip-input';
import Layout from '../../components/main/Layout';
import FileBase from 'react-file-base64';

const initialState = {
  title: '',
  description: '',
  tags: [] as string[],
  imageFile: '' as string,
};

const create = () => {
  const [tourData, setTourData] = useState(initialState);
  const { title, description, tags } = tourData;

  return (
    <Layout>
      <section className="login_container form_container">
        <div className="login form">
          <h2 className="title">Create Tour</h2>
          <form>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                className="form_input"
                placeholder="Title"
                onChange={(e) =>
                  setTourData({ ...tourData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                className="text_input"
                placeholder="Description"
                value={description}
                onChange={(e) =>
                  setTourData({ ...tourData, description: e.target.value })
                }
                required
              />
            </div>
            <div>
              <ChipInput
                name="tags"
                id="tags"
                placeholder="enter tags"
                fullWidth
                variant="outlined"
                value={tags}
                onAdd={(chip) =>
                  setTourData({ ...tourData, tags: [...tags, chip] })
                }
                onDelete={(index) => {
                  const newTags = [...tags];
                  newTags.splice(index, 1);
                  setTourData({ ...tourData, tags: newTags });
                }}
              />
            </div>
            <div className="image">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourData({ ...tourData, imageFile: base64 })
                }
              />
            </div>
            <button type="submit" className="btn_submit">
              Add Tour
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default create;
