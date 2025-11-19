import { upload } from '@testing-library/user-event/dist/upload';
import { search } from '~/apiServices/searchServices';
import Following from '~/pages/Following';

const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    search: '/search',
};

export default routes;
