import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {ContributionRoutingModule} from './dp-request-routing.module';
import {DPRequestComponent} from './dp-request.component';
import {DPRequestDetailComponent} from './dp-request-detail/dp-request-detail.component';
import {DPRequestService} from '../../shared/services/dp-request.service';
import {FormsModule} from '@angular/forms';
import {ContributionService} from '../../shared/services/contribution.service';
import {DpRequestNewComponent} from './dp-request-new/dp-request-new.component';


@NgModule({
    imports: [
        CommonModule,
        ContributionRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    providers: [DPRequestService, ContributionService],
    declarations: [DPRequestComponent, DPRequestDetailComponent, DpRequestNewComponent]
})
export class DPRequestModul { }
