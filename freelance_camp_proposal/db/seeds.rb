10.times do |proposal|
Proposal.create!(
	customer: "Customer #{proposal}",
	portfolio_url: 'http://www.jaredromney.com',
	tools: 'Ruby on Rails, Angular 2, and Postgres',
	estimated_hours: (80 + proposal),
	hourly_rate: 50,
	weeks_to_complete: 12,
	client_email: 'jaredjamesromney@gmail.com',
) 
end
