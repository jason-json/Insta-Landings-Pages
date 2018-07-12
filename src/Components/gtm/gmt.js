const windowGlobal = typeof window !== 'undefined' && window.dataLayer;

const dataLayer = windowGlobal || [];

const pageView = (path, pageTitle) => {
 
	return dataLayer.push({
		event: 'sucursalesPageViews',
		page: path,
		title: pageTitle
	});
};
export const DLtoogle = Sucursal => {
	return dataLayer.push({
		event:'horarioToggl'
	});
};
export const sucursalFormOpen = Sucursal => {
    console.log(Sucursal);
	return dataLayer.push({
		event: 'sucursalFormOpen',
		sucursal: Sucursal
	});
};

export const sucursalFormClose = Sucursal => {
	return dataLayer.push({
		event: 'sucursalFormClose',
		sucursal: Sucursal
	});
};

export const sucursalFormSubmit = Sucursal => {
	return dataLayer.push({
		event: 'sucursalFormSubmit',
		sucursal: Sucursal
	});
};

export const sucursalFormError = Sucursal => {
	return dataLayer.push({
		event: 'sucursalFormError',
		sucursal: Sucursal
	});
};

export default pageView;
