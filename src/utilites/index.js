export const parseDate = (str='') => {
	const pattern = /(\d{4})-(\d{2})-(\d{2})/;
	const res = str.created_at.match(/(\d{4})-(\d{2})-(\d{2})/);

	return res[0]
}