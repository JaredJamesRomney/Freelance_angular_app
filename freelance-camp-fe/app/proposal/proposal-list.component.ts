import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc company', 'http://jaredromney.com', 'ruby on rails', 150, 120, 15, 'jared.romney28@gmail.com')
	proposalTwo: Proposal = new Proposal(43, 'xyz company', 'http://jaredromney.com', 'ruby on rails', 150, 120, 15, 'jared.romney28@gmail.com')
	proposalThree: Proposal = new Proposal(23, 'purple hippo company', 'http://jaredromney.com', 'ruby on rails', 150, 120, 15, 'jared.romney28@gmail.com')

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}