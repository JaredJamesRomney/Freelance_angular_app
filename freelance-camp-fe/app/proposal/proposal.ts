export class Proposal {
	constructor(
		public id?: number,
		public customer?: string,
		public portfolio_url: string = 'http://',
		public tools?: string,
		public estimated_hour?: number,
		public hourly_rate?: number,
		public weeks_to_complete?: number,
		public client_email?: string,
	) {}
}

//'15', 'Abc company', 'http://jaredromney.com', 'ruby on rails', 150, 120, 15, 'jared.romney28@gmail.com'