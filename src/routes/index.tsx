import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Page404 from '../pages/Page404';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Catalog />,
	},
	{
		path: '*',
		element: <Page404/>,
	},
]);

export default router;
