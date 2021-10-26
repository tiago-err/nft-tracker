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
export interface OS_Collection {
	primary_asset_contracts: OS_PrimaryAssetContracts[];
	traits: {};
	stats: OS_CollectionStats;
	banner_image_url: string;
	chat_url: string | null;
	created_date: Date;
	default_to_fiat: boolean;
	description: string;
	dev_buyer_fee_basis_points: string;
	dev_seller_fee_basis_points: string;
	discord_url: string;
	display_data: {
		card_display_style: string; // TODO: Enum if card display styles
	};
	external_url: string;
	featured: boolean;
	featured_image_url: string;
	hidden: true;
	safelist_request_status: string;
	image_url: string;
	is_subject_to_whitelist: boolean;
	large_image_url: string;
	medium_username: string | null;
	name: string;
	only_proxied_transfers: boolean;
	opensea_buyer_fee_basis_points: string;
	opensea_seller_fee_basis_points: string;
	payout_address: string;
	require_email: boolean;
	short_description: string | null;
	slug: string;
	telegram_url: string | null;
	twitter_username: string;
	instagram_username: string;
	wiki_url: string | null;
	owned_asset_count?: number;
}

export interface OS_PrimaryAssetContracts {
	address: string;
	asset_contract_type: "non-fungible";
	created_date: Date;
	name: string;
	nft_version: string;
	opensea_version: string | null;
	owner: number;
	schema_name: string; // TODO: Enum of schema names
	symbol: string; // TODO: Enum of symbols
	total_supply: string;
	description: string;
	external_link: string;
	image_url: string;
	default_to_fiat: boolean;
	dev_buyer_fee_basis_points: number;
	dev_seller_fee_basis_points: number;
	only_proxied_transfers: boolean;
	opensea_buyer_fee_basis_points: number;
	opensea_seller_fee_basis_points: number;
	buyer_fee_basis_points: number;
	seller_fee_basis_points: number;
	payout_address: string;
}

export interface OS_CollectionStats {
	one_day_volume: number;
	one_day_change: number;
	one_day_sales: number;
	one_day_average_price: number;
	seven_day_volume: number;
	seven_day_change: number;
	seven_day_sales: number;
	seven_day_average_price: number;
	thirty_day_volume: number;
	thirty_day_change: number;
	thirty_day_sales: number;
	thirty_day_average_price: number;
	total_volume: number;
	total_sales: number;
	total_supply: number;
	count: number;
	num_owners: number;
	average_price: number;
	num_reports: number;
	market_cap: number;
	floor_price: number;
}
