import React, { FormEvent, useState, useEffect } from 'react';
import ChipInput from 'material-ui-chip-input';
import Layout from '../../components/main/Layout';
import store, { storeType } from '../../redux/configureStore';
import { createTour } from '../../redux/actions/tour';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import FileBase from 'react-file-base64';

const create = () => {
  const [tourData, setTourData] = useState({
    title: '',
    description: '',
    tags: [] as string[],
    imageFile: '' as string,
  });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const createTourStore = useSelector((store: storeType) => store.tourData);
  const router = useRouter();
  const { title, description, tags } = tourData;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = { title, description, tags, imageFile: tourData.imageFile };
    store.dispatch(createTour(formData));
  };

  useEffect(() => {
    if (pageLoaded) {
      if (createTourStore.tour) {
        toast.success('Tour created successfully');
        router.push('/');
      }

      if (createTourStore.error) {
        toast.error(createTourStore.error.message);
      }
    }
    setLoading(createTourStore.loading);
  }, [createTourStore]);

  useEffect(() => {
    if (!currentUser.user) router.replace('/login');
    setPageLoaded(true);
  }, [])

  return (
    <Layout>
      <section className="login_container form_container">
        <div className="login form">
          <h2 className="title">Create Tour</h2>
          <form onSubmit={handleSubmit}>
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
