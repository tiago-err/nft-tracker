//! SOLANART INTERFACES
export interface SA_Collection {
	updateAuth: string;
	attributes_trait_types: string;
	attributes_filters: string;
	attributes_values: string;
	dw: 0 | 1;
	nb: 0 | 1;
	creators: string;
	id: number;
	url: string;
	urlsoon: string;
	name: string;
	description: string;
	display: 0 | 1;
	new: 0 | 1;
	soon: 0 | 1;
	trending: 0 | 1;
	date: number;
	supply: number;
	regionfix: string;
	twitter: string;
	website: string;
	img: string;
	discord: string;
	imgpreview: string;
}

export interface SA_NFT {
	id: number;
	token_add: string;
	price: number;
	for_sale: 0 | 1;
	link_img: string;
	name: string;
	escrowAdd: string;
	seller_address: string;
	attributes: string;
	skin: string | null;
	type: string;
	ranking: number | null;
	lastSoldPrice: number | null;
}

//! OPENSEA INTERFACES
export interface OS_Collection {}
