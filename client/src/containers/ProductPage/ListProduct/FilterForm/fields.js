export const productsOptions = [
	{
		key: 'CA0008',
		label: 'April skin',
	}
];

const fields = [
	{
  name: 'name',
  label: 'Product Name',
  placeholder: 'Enter product name...',
  rules: 'required|string|between:1,50',
	},
	// TODO: implement select category to add product in the future
	{
  name: 'category',
  label: 'Belong to Category',
  placeholder: 'Choose any category...',
  rules: 'required',
	},
	{
	  name: 'basePrice',
	  label: 'Base Price',
	  placeholder: 'Enter base price...',
	  rules: 'required|number',
	},
	{
	  name: 'category',
	  label: 'Category',
    value: productsOptions[0],
    extra: productsOptions,
	},
	{
	  name: 'quantity',
	  label: 'Quantity',
	  placeholder: 'Enter quantity...',
	  rules: 'required|number',
	},

];

export default fields;